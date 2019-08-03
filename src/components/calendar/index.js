import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import './calendar.css';
import CalendarImage from '../../images/calendar.svg';

class Calendar extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query CalendarQuery {
            allContentfulCalendar(
              limit: 5
              sort: { fields: [date], order: ASC }
            ) {
              edges {
                node {
                  title
                  date
                  eventlogo {
                    fluid(maxWidth: 1200, quality: 85) {
                      src
                      ...GatsbyContentfulFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div className="calendar-mobile-mask">
              <div className="calendar_div">
                <table className="calendar-table">
                  <tbody>
                    <tr className="calendar-top-tablerow">
                      <th className="calendar-top-tablerow-upcoming">
                        Upcoming Events
                      </th>
                      {data.allContentfulCalendar.edges.map(edge => (
                        <th>
                          <img
                            src={edge.node.eventlogo.fluid.src}
                            className="calendar-image"
                          ></img>{' '}
                          <span className="calendar-event-text">
                            {edge.node.title}
                          </span>
                        </th>
                      ))}
                    </tr>
                    <tr className="calendar-bottom-tablerow">
                      <th>Jan - Dez 2019</th>

                      {data.allContentfulCalendar.edges.map(edge => (
                        <th>
                          <img
                            src={CalendarImage}
                            className="calendar-image-svg"
                          ></img>{' '}
                          <span className="calendar-event-date">
                            {edge.node.date}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

export default Calendar;
