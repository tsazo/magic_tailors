import PageSection from '../../components/PageSection';
import needle from '../../assets/icons/needle.png';
import family from '../../assets/icons/family.png';
import check from '../../assets/icons/check.png';

const Hook = () => {
  return (
    <PageSection isRounded='true' padding='88px 0px 0px 0px'>
        <div style={{ width: '50%'}} >
          <p style={{ margin: '0px 0px 24px', fontSize: '60px', fontWeight: '500', lineHeight: '75px',}}>
            Expert custom fittings and alterations.
          </p>
          <p style={{fontSize: '20px', margin: '0px 0px 24px 0px',}}>Enjoy the confidence of well-fitting clothes.</p>
        </div>

        {/* marketing points */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            margin: '40px 20px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} alt="Needle icon" src={needle}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Operating for 25 years</p>
            <p style={{ margin: '0px'}}> Unlocking your wardrobe's full potential, since 1998.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} alt="check icon" src={check}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Walk-ins welcome</p>
            <p style={{ margin: '0px'}} >Providing same-day services for altercations.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} alt="Family icon" src={family}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Family-owned & operated</p>
            <p style={{ margin: '0px'}} >Great quality and insight comes from working with the people we know best.</p>
          </div>
        </div>
      </PageSection>
  );
}



export default Hook;