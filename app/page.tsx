import '@root/global.scss';

import ActionListItem from '@components/ActionListItem';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import Card from '@components/Card';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Grid from '@components/Grid';
import Indent from '@components/Indent';
import ModalStack from '@components/ModalStack';
import Package from '@root/package.json';
import Row from '@components/Row';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://ramenamok.com';
  const handle = '@mitch__malone';

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://wireframes.internet.dev'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png',
          width: 1500,
          height: 785,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png'],
      title,
      url,
    },
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <br />
      <Grid>
        <Row>
          {Package.name.toUpperCase()} <Badge>Version {Package.version}</Badge>
        </Row>
        <Row>{Package.description}</Row>
      </Grid>

      <DebugGrid />
      <DefaultActionBar />

      <Grid>
        <ActionListItem icon={`⭢`} href="mailto:mitch@ramenamok.com">
          Hire the team to build your applications
        </ActionListItem>
      </Grid>
      
      <Grid>
        <Card title="ABOUT THE TEAM">
          The Ramen Amok team have advised, designed, strategized and delivered hundreds of startups, both individually and together as a team.<br/><br/>

          <Avatar src="https://media.licdn.com/dms/image/v2/C5603AQGqevbD4eKmVQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1573510358953?e=1740614400&v=beta&t=eXZLYnP9b5CQeT08HUq6aGqd5nQjiiCuWytrVAVrJes" href="https://www.linkedin.com/in/bianca-chrysostomou-40935842/" target="_blank">
            <Indent>
              BEE CHRIS
              <br />
              Designer
            </Indent>
          </Avatar>

          <Avatar src="https://media.licdn.com/dms/image/v2/C5103AQFsY4NZXzMK8Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1526277581919?e=1740614400&v=beta&t=MH4jYljSeYGbLN6IvQ5beRBNluBEOXiHDFHzZMCGc-s" href="https://www.linkedin.com/in/david-grieve-13b4482b" target="_blank">
            <Indent>
              David Grieve
              <br />
              .Net Engineer
            </Indent>
          </Avatar>

          <Avatar src="https://media.licdn.com/dms/image/v2/D5603AQHllZiKnf7otw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684311086360?e=1740614400&v=beta&t=9Utb6UwRJyZ7k7IZHgCLvKNBYwrMcTm97PxXWk9sLsY" href="https://www.linkedin.com/in/mitchmalone/" target="_blank">
            <Indent>
              MITCH MALONE
              <br />
              Product Manager &amp; Consultant
            </Indent>
          </Avatar>


          <Avatar src="https://media.licdn.com/dms/image/v2/C5603AQEMvnx3sXUPkw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1596355315783?e=1740614400&v=beta&t=bHREb6BDQOGFs8WQ4EXij6o-ipsOdEe3f2RlJg_R8DM" href="https://www.linkedin.com/in/vlad-antohi-8951011" target="_blank">
            <Indent>
              VLAD ANTIHI
              <br />
              iOS & Android Engineer
            </Indent>
          </Avatar>
        </Card>
      </Grid>

      <Grid>
        <ActionListItem icon={`⭢`} href="mailto:mitch@ramenamok.com">
          Hire the team to build your applications
        </ActionListItem>
      </Grid>

      <ModalStack />
    </DefaultLayout>
  );
}
