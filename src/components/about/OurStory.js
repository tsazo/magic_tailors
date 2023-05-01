import PageSection from '../PageSection';
import SectionLine from '../SectionLine';

let ourStory = [`Welcome to Magic Tailors, a small tailoring shop where we provide high-quality alteration services for all occasions. My name is Geni Cespedes and I have been living in the Valley Stream area for over 30 years. Magic Tailor's came to be after years of working as a seamstress for our community. I wanted to provide my services to the community directly, providing top services using the skills I gained being in the tailoring industry 20+ years.`, `I opened this business with a passion for fashion and a love for providing quality alteration services. I am known to take on a variety of projects: come to me and I'll find a way to make your request work. The work done here at Magic Tailor's is meticulous and individual. We want to work with you to make sure your happy with the end result, which is why we encourage you to walk into the store to get the process started as soon as possible.`, `Here at Magic Tailors, we specialize in altering everything from prom dresses and formal wear to casual wear. Our experienced and skilled team ensures that your clothing not only fits perfectly but also flatters your body. We believe that it is the little details that make a big difference, and we are dedicated to providing the highest quality alteration services for all of our clients.`, `We treat our clients like family, and we take pride in providing personalized services that meet all of your tailoring needs. We look forward to serving you and providing you with the best alteration services in the industry.`, `- Geni`]




const OurStory = () => {
  return (
    <PageSection>
        <div style={{'width': '50%'}}>
            <h1>Our Story</h1>
            <SectionLine margin='auto' />
            <div style={{'textAlign': 'left'}}>
                {ourStory.map((text) =>
                <p>{text}</p>)}
            </div>
        </div>
    </PageSection>
  );
}

export default OurStory;