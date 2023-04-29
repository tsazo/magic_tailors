import PageSection from '../PageSection';
import SectionLine from '../SectionLine';

let ourStory = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada ultricies mauris, non varius nibh aliquam eu. Etiam quis arcu ornare elit placerat porttitor.`, `Nam sed lobortis erat. Vivamus quis blandit sem, pulvinar laoreet massa. Curabitur placerat scelerisque nibh sed rutrum. Ut pellentesque nibh in semper congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie augue quis odio ultrices, maximus volutpat arcu feugiat. `, `Vestibulum ipsum augue, tempor in congue quis, luctus in mauris. Aenean ullamcorper in odio non condimentum. Praesent enim dui, interdum scelerisque venenatis quis, tincidunt sit amet ex. Nullam varius, est nec malesuada vulputate, enim purus semper metus, vitae placerat quam justo eu elit. `, `Pellentesque pulvinar finibus tortor ac commodo. Proin rhoncus molestie vulputate. Nunc pharetra lectus eget libero eleifend feugiat. Mauris vitae vehicula nibh. `, `- Geni`]


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