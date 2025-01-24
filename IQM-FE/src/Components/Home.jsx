import React from 'react'
import './Home.css'
import { Link } from 'react-router'
export default function Home() {
  return (
    <div className="homepage-container">
    {/* Welcome Section */}
    <section className="welcome">
      <h1 className="welcome-title">Empowering Candidates, One Question at a Time!</h1>
      <p className="welcome-text">
        Prepare smarter for your next client interview with real questions
        shared by previous candidates. Discover valuable insights to help you
        succeed.
      </p>
      <div className="welcome-buttons">
        <button className="button primary"><Link to="/ViewQuestionList">Explore Questions</Link></button>
        <button className="button secondary"><Link to="/AddQuestions">Add Your Experience</Link></button>
      </div>
    </section>

    {/* About Section */}
    <section className="about">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="about-cards">
        <div className="card">
          <h3 className="card-title">Learn from Real Experiences</h3>
          <p className="card-text">
            Gain access to a curated list of questions directly from
            candidates who’ve attended interviews with top clients.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Save Time and Stress</h3>
          <p className="card-text">
            No more endless searches for interview prep. Get relevant
            questions tailored to specific roles and industries.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Give Back to the Community</h3>
          <p className="card-text">
            Share your interview experience and help others succeed in their
            career journey.
          </p>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="how-it-works">
      <h2 className="section-title">Three Simple Steps to Ace Your Interviews!</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <p className="step-text">
            Browse Questions: Explore categorized interview questions for your
            desired position and client.
          </p>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <p className="step-text">
            Contribute: Share the questions you faced in your interview to
            enrich the platform.
          </p>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <p className="step-text">
            Prepare Smarter: Use insights from real experiences to boost your
            confidence and ace your next interview.
          </p>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="cta">
      <h2 className="cta-title">Start Your Journey Today!</h2>
      <div className="cta-buttons">
        <button className="button primary">Browse Questions Now</button>
        <button className="button secondary">Contribute Questions</button>
      </div>
    </section>
  </div>
  )
}
