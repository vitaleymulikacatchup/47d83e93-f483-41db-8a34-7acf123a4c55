"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Dumbbell, Heart, Quote, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Classes", id: "feature" },
            { name: "Trainers", id: "team" },
            { name: "Membership", id: "contact" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="FitZone Gym Logo"
          brandName="FitZone"
          button={{
            text: "Join Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Transform Your Body, Transform Your Life"
          description="Join FitZone and discover a world-class fitness experience with state-of-the-art equipment, expert trainers, and a supportive community dedicated to helping you reach your goals."
          tag="Premium Fitness"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Explore Classes", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern gym interior with equipment"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose FitZone"
          description={[
            "We're more than just a gym – we're your fitness destination. With cutting-edge equipment, expert guidance, and a welcoming community, we provide everything you need to achieve your health and fitness goals.",
            "From beginners taking their first steps to athletes pushing their limits, our diverse range of programs and personalized approach ensures everyone finds their path to success."
          ]}
          buttons={[
            { text: "Join Today", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Facilities"
          description="Experience the best in fitness with our comprehensive range of equipment and services designed for every fitness level."
          tag="Facilities"
          tagIcon={Dumbbell}
          features={[
            {
              title: "Strength Training",
              description: "State-of-the-art weight machines, free weights, and functional training equipment for building muscle and strength.",
              icon: Dumbbell
            },
            {
              title: "Cardio Zone",
              description: "Latest cardio equipment including treadmills, ellipticals, and bikes with entertainment systems and heart rate monitoring.",
              icon: Heart
            },
            {
              title: "Group Classes",
              description: "Dynamic group fitness classes including yoga, HIIT, spinning, and dance to keep your workouts fun and engaging.",
              icon: Users
            },
            {
              title: "Personal Training",
              description: "One-on-one sessions with certified trainers to create customized workout plans and achieve your specific goals.",
              icon: Target
            }
          ]}
          carouselMode="buttons"
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Proven Results"
          description="Numbers that speak for themselves - see how our members achieve their fitness goals."
          tag="Success Stories"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "2000+",
              title: "Active Members",
              description: "Happy members achieving their fitness goals daily",
              icon: Users
            },
            {
              id: "2",
              value: "95%",
              title: "Goal Achievement",
              description: "Of our members reach their fitness targets within 6 months",
              icon: Target
            },
            {
              id: "3",
              value: "50+",
              title: "Expert Trainers",
              description: "Certified professionals ready to guide your fitness journey",
              icon: Award
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Trainers"
          description="Our certified fitness professionals are here to guide, motivate, and help you achieve your goals."
          tag="Expert Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Head Trainer",
              imageSrc: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson, Head Trainer"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Yoga Specialist",
              imageSrc: "https://images.pexels.com/photos/7055723/pexels-photo-7055723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Thompson, Yoga Specialist"
            },
            {
              id: "3",
              name: "Alex Rodriguez",
              role: "Strength Coach",
              imageSrc: "https://images.pexels.com/photos/6456305/pexels-photo-6456305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rodriguez, Strength Coach"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Member Success Stories"
          description="Real results from real people who transformed their lives at FitZone."
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Marketing Manager",
              testimonial: "FitZone completely changed my approach to fitness. The trainers are incredible and the community is so supportive. I've never felt stronger!",
              imageSrc: "https://images.pexels.com/photos/6456206/pexels-photo-6456206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Software Engineer",
              testimonial: "After years of struggling with consistency, FitZone gave me the structure and motivation I needed. Down 30 pounds and feeling amazing!",
              imageSrc: "https://images.pexels.com/photos/7991918/pexels-photo-7991918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen"
            },
            {
              id: "3",
              name: "Lisa Williams",
              role: "Teacher",
              testimonial: "The group classes are fantastic and the equipment is top-notch. FitZone has become my second home and I love the energy here.",
              imageSrc: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Williams"
            },
            {
              id: "4",
              name: "Michael Torres",
              role: "Business Owner",
              testimonial: "Best investment I've made for my health. The personal trainers helped me reach goals I never thought possible. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/7991918/pexels-photo-7991918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Torres"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Fitness Journey?"
          description="Get in touch with us today to learn more about our memberships, classes, and facilities. We're here to help you achieve your goals."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals or ask any questions...",
            rows: 4,
            required: true
          }}
          buttonText="Join FitZone"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="FitZone"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Classes", href: "feature" },
                { label: "Trainers", href: "team" },
                { label: "Membership", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact Info", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Pricing", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}