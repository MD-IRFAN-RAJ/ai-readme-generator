import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for personal projects and getting started",
      features: [
        "5 README generations per month",
        "Basic templates",
        "Standard support",
        "No credit card required"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "Ideal for developers and small teams",
      features: [
        "Unlimited README generations",
        "Advanced templates & customization",
        "Priority support",
        "Export to multiple formats",
        "Analytics dashboard"
      ],
      buttonText: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations and large teams",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom templates",
        "API access",
        "White-label options",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pricing-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
      </div>

      <div className="pricing-content">
        <h1 className="pricing-title">
          <span className="title-accent">Simple</span> Pricing
        </h1>
        <p className="pricing-subtitle">
          Choose the plan that works best for your project needs
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card glass ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  {plan.period && <span className="period">{plan.period}</span>}
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="faq-section glass">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change plans anytime?</h3>
              <p>Yes, you can upgrade, downgrade, or cancel your plan at any time with no hidden fees.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer discounts for students?</h3>
              <p>Yes, we offer a 50% discount for students and educational institutions. Contact our support team for details.</p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and for enterprise plans, we can arrange bank transfers.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>The Free plan is always free. For the Pro plan, we offer a 14-day free trial with no credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;