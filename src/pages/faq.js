import React, { Component } from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import Background from '../components/background';

import './faq.css';

class FAQ extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Help & FAQ" description="Contact TBE" />
        <Background />
        <Nav />
        <div className="faq-wrap">
          <div className="faq-header">Help and FAQ</div>
          <div className="faq-text">
            <h2 className="faq-sub-title">
              Why do trainees have to sign a contract?
            </h2>
            <p className="faq-paragraph">
              One concern of ours is that recruits will not be entirely honest
              with us in how committed they are to joining TBE. That concern is
              very much founded on our experiences when we were a slightly
              larger discord community, that commonly saw people join without a
              real commitment to the community, which drained us of a lot of
              time and resources that we would have rather invested in the
              people that are truly planning to stay with us and share the
              vision we have for this organization. A contract cannot entirely
              nullify this, but it sets the tone for a professional relationship
              between the player and the organization, and potentially
              discourages those that have no real interest in the community.
            </p>

            <h2 className="faq-sub-title">
              Why do trainees have to pay a contract fee?
            </h2>
            <p className="faq-paragraph">
              Very similarly to the prior question, the contract fee is meant to
              discourage those that are uncertain about whether or not they can
              stay with TBE for at least four months. It sounds like we are
              being very exclusive, but our intention is simply that we do not
              want to waste time that we could invest in our committed members.
              For example, if you are starting a new, much more time-intensive
              job very soon, planning to get married in a month, or are six
              months pregnant, we would like to congratulate you on all those
              things, but it simply does not make sense for you to join an
              organization that plans to work with you for an extended period of
              time. And if you are confident in your ability to stick around and
              not be a complete dick while you are with us, chances are that the
              contract fee will be returned to you without any problems. We are
              not going to be using the money of the contract fees either, it
              will sit untouched on a sub-account with your name tag on it.
            </p>

            <h2 className="faq-sub-title">
              What does a trainee contract really look like?
            </h2>
            <p className="faq-paragraph">
              Our trainee contracts are fairly short (3 pages) documents, which
              mainly focus on establishing a proper relationship between the
              trainee and the organization, while protecting both parties from
              each other. This protection is mostly focused around guaranteeing
              that the org will return the contract fee, and that the trainee
              cannot abuse the org’s services or share confidential information
              with third parties. The contract also includes behaviour
              guidelines and minimum activity requirements for the trainee,
              which are meant to guarantee that the trainee does not negatively
              affect the atmosphere of the community, but are also still lax
              enough to not feel like a burden on the trainee ( we are talking
              seven soloq games per week and making sure to tell your advisee
              when you can’t make it).{' '}
            </p>

            <h2 className="faq-sub-title">What exactly does an advisor do?</h2>
            <p className="faq-paragraph">
              An advisor is the person that is personally responsible for a
              trainee. They will help integrate the trainee into the community,
              answer all their questions, and work with the trainee to figure
              out an optimal training plan for them, while also helping to
              schedule events and activities for the trainee, like participation
              in house games or even external tournaments. They are both a
              helper and a supervisor, as they are also responsible for keeping
              track of a trainee’s progress and make sure that they fulfill
              their active duty. The advisor will also represent their trainee’s
              interest in front of the rest of the staff, should it be
              necessary.{' '}
            </p>

            <h2 className="faq-sub-title">
              What kind of activities do you do on TBE?
            </h2>
            <p className="faq-paragraph">
              Our usual weekly activities will mostly include inhouse games,
              courses lead by coaches, and opportunities for training groups and
              teams to scrim against teams from partnered organizations, but
              also the occasional fun event less related to competitive league
              to make sure that everyone gets a chance to rest once in a while.
              We will also host smaller competitions for our trainees to show
              their skill and proof that they are ready to debut. These could
              come in the form of lane-specific 1v1/2v2 tournaments, written
              tests about League’s world of numbers, drafting competitions, and
              straight up 5v5 tournaments.
            </p>

            <h2 className="faq-sub-title">What do your courses look like?</h2>
            <p className="faq-paragraph">
              Courses can differ quite substantially in their structure and
              content. Usually, a course means that a coach will gather together
              with a small group of trainees to teach a certain aspect of the
              game. There could be leadership courses, which would mainly
              consist of a small lecture and a discussion between the trainees
              and the coach, but also much more specific courses about certain
              lane matchups or phases of the game, team compositions or champion
              archetypes. Those courses might feature smaller custom games, or
              be in combination with inhouse events, where players can try the
              learned under supervision of the coach. We will continuously roll
              out new, interactive courses, and our coaches will only continue
              to improve and find better ways to present their knowledge.
            </p>

            <h2 className="faq-sub-title">
              Why can’t I find a link to your discord server?
            </h2>
            <p className="faq-paragraph">
              Our discord server is meant to be a private space, in which our
              players can truly feel comfortable and at home. We think that a
              constant flow of people joining and leaving is not beneficial for
              that atmosphere. If you are looking to join TBE, use the form on
              the{' '}
              <Link className="faq-link" to="/joinus">
                Join Us
              </Link>{' '}
              page, and we will send you a temporary invite link to the server,
              if you are chosen for a conversation. If you are not planning to
              join TBE, but are interested to look around, please use the
              contact details on our{' '}
              <Link className="faq-link" to="/contact">
                Contact
              </Link>{' '}
              page to request access to the server, together with your reasoning
              to do so.
            </p>

            <h2 className="faq-sub-title">
              Does TBE have its own league/tournament?
            </h2>
            <p className="faq-paragraph">
              Bird Esports does not currently host its own regular league or
              tournament, nor are we planning to do so in the near future. Our
              teams will usually debut in externally organized leagues and
              tournaments. Though we will occasionally host smaller competitions
              with rewards for our own trainees to get them used to the pressure
              of a tournament.
            </p>

            <h2 className="faq-sub-title">
              I also own an esports organization and would like to partner with
              TBE. Who do I contact?
            </h2>
            <p className="faq-paragraph">
              If you are interested in a partnership with TBE, please use the
              contact information on our{' '}
              <Link className="faq-link" to="/contact">
                Contact
              </Link>{' '}
              page, and let us know about your vision for the partnership. We
              will certainly be interested to hear it, and soon get into contact
              with you for further conversations. We are quite fond of scrim
              partnerships, mutual PR-pushes, offering of tournament spots in
              return for publicity, or if you are looking to recruit one of our
              trainees as a starter for your team.
            </p>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default FAQ;
