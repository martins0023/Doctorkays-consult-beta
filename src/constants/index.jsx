import { Edit3, HelpCircle, Home, Info, Phone, ShoppingCart, Users } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/", iconMapping: <Home className="w-5 h-5 inline mr-2" /> },
  { label: "About Us", href: "/about", iconMapping: <Info className="w-5 h-5 inline mr-2" /> },
  { label: "Community Forums", href: "/community", iconMapping: <Users className="w-5 h-5 inline mr-2" /> },
  { label: "Blog", href: "/blog", iconMapping: <Edit3 className="w-5 h-5 inline mr-2" /> },
  { label: "Shop", href: "/shop", iconMapping: <ShoppingCart className="w-5 h-5 inline mr-2" /> },
  { label: "Contact", href: "/contact", iconMapping: <Phone className="w-5 h-5 inline mr-2" /> },
  { label: "FAQs", href: "/faqs", iconMapping: <HelpCircle className="w-5 h-5 inline mr-2" /> },
];

export const testimonials = [
  {
    user: "MLS Abimbola",
    company: "United Kingdom",
    image: user1,
    text: "Service is very satisfying.",
  },
  {
    user: "Philadolar",
    company: "Nigeria",
    image: user2,
    text: "Your product or content has been really educative and also fun to watch. Keep it up",
  },
  {
    user: "Oluitan Olumide",
    company: "Nigeria",
    image: user3,
    text: "Doctor kays has been an amazing Doctor since I got to know him.",
  },
  {
    user: "Jeremiah Robert",
    company: "Nigeria",
    image: user4,
    text: "Dr Kays is now a household name in social media space. The people on my space are loving it, to the extent of asking: this Doctor kay's you are always posting is doing very good with the health education. Those tips and reminders are very helpul.",
  },
  {
    user: "Commy-Constance Oko",
    company: "Nigeria",
    image: user5,
    text: "I have learnt so much about personal health and got to know a lot on health matters generally. Thank you so much Dr. Kays for always giving prompt response to my questions.",
  },
  {
    user: "Ezekiel",
    company: "London",
    image: user6,
    text: "Great team and the app is easy to use.",
  },
];


export const faqsCard = [
  {
    id: 1,
    question: "Who is Doctor Kays?",
    answer:
      "Doctor Kays, whose full name is Doctor Olayiwola Babatunde Emmanuel, is a medical professional with a strong commitment to preventive health care and community wellness. He shares his knowledge to empower people to make informed health choices that translate into healthier, fulfilling lives.",
  },
  {
    id: 2,
    question: "What is the mission of Doctor Kays?",
    answer:
      "Doctor Kays is on a quest to make health care more approachable and understandable for everybody. He turns complex medical explanations into interesting stories with a pinch of humor. Doctor Kays ensures that health education is not only informative but also enjoyable.",
  },
  {
    id: 3,
    question: "What services are offered?",
    answer:
      "Doctor Kays provides a wide range of services aimed at increasing health awareness. These include Health Nuggets, which are weekly small tips for wellness; Clinic Series, which is an in-depth exploration of certain health topics; Medicine on the Street, which is an interactive street segment to answer real-life health questions; and personal consultations that offer individualized health advice and counseling.",
  },
  {
    id: 4,
    question: "How is the content presented?",
    answer:
      "Content is provided on YouTube, blogs, podcasts, and social media through creative storytelling, humor, and interactivity. It simplifies complex health topics into ones that are relatable, engaging, and easy to understand. The visuals, creative narration, and interactive formats ensure that audiences can apply the information in their daily lives while being entertained. Through diverse platforms, Doctor Kays effectively reaches a wide audience, creating a very interactive community for health awareness and wellness.",
  },
  {
    id: 5,
    question: "How do I make an appointment?",
    answer:
      "To book an appointment with Doctor Kays, consider visiting the booking section on the website. Full guidelines are provided therein to help you make the appointment regarding your needs and what you would want covered.",
  },
  {
    id: 6,
    question: "What topics are covered?",
    answer:
      "Doctor Kays covers general health, disease prevention, lifestyle changes, and wellness, among many other health-related topics. His content covers areas related to day-to-day living health and other particular medical topics.",
  },
  {
    id: 7,
    question: "How is Doctor Kays unique?",
    answer:
      "What sets Doctor Kays apart is his ability to combine professional medical expertise with humor and storytelling. Such an approach makes learning about health more engaging and helps them remember and apply key health concepts in their daily lives.",
  },
];

export const pricingOptions = [
  {
    id: "Blood-Tests-and-Scan-Report",
    title: "Blood Tests and Scan Report",
    originalPrice: "$4",
    price: "$0",
    type: "once",
    features: [
      "Join the Community",
      "Newsletter Subscription",
      "Weekly Health Nugget",
      "Laboratory Interpretation",
      "Free Referral suggestions to nearest pharmacies and diagnostic centers",
    ],
    link: "https://calendly.com/martinsmiracle45/one_time_appointment",
  },
  {
    id: "Silver-Package",
    title: "Silver Package",
    originalPrice: "$9",
    price: "$0",
    type: "10 minutes",
    features: [
      "Consultation is scheduled only on available dates",
      "Join the Community",
      "Newsletter Subscription",
      "Weekly Health Nugget",
      "Consultation Chat, Audio and Video Calls",
      "Free Referral suggestions to nearest pharmacies and diagnostic centers",
      
    ],
    link: "https://calendly.com/martinsmiracle45/one_time_appointment",
  },
  {
    id: "Gold-Package",
    title: "Gold Package",
    originalPrice: "$19",
    price: "$9.5",
    type: "10 minutes",
    features: [
      "Swift consultation within 24hrs",
      "Join the Community",
      "Newsletter Subscription",
      "Weekly Health Nugget",
      "Consultation Chat and Calls",
      "Free Referral suggestions to nearest pharmacies and diagnostic centers",
      
    ],
    link: "https://calendly.com/martinsmiracle45/one_time_appointment",
  },
  
];

export const resourcesLinks = [
  { href: "/blog", text: "Blog" },
  { href: "/faqs", text: "FAQs" },
  { href: "https://www.youtube.com/@Doctorkays", text: "MOS" },
  { href: "https://www.youtube.com/@Doctorkays", text: "Clinic Series" },
  { href: "/community", text: "Community Forums" },
];

export const platformLinks = [
  { href: "/consultation", text: "Consultation" },
  { href: "/shops", text: "Shops and Merch" },
  // { href: "#", text: "Clinic Online (coming soon)" },
];

export const communityLinks = [
  { href: "/about", text: "About us" },
  { href: "/contact", text: "Contact Us" },
  { href: "/partnership", text: "Become a Sponsor/Collaborate" },
  { href: "/projects", text: "Projects" },
  { href: "/volunteer", text: "Become a volunteer" },
];
