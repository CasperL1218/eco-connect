import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  Container,
  Divider,
  Chip,
  useTheme
} from '@mui/material';
// Import MUI icons individually from the correct paths
import NatureIcon from '@mui/icons-material/Nature';
import BoltIcon from '@mui/icons-material/Bolt';
import PeopleIcon from '@mui/icons-material/People';
import WavesIcon from '@mui/icons-material/Waves';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom';

// Import mock data
import { events, groups, suggestions } from '../data/mockData';

const HomePage = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! You will receive updates about environmental initiatives.`);
    setEmail('');
  };

  const featuredEvent = events[0]; // Get the first event for featured display
  const featuredGroups = groups.slice(0, 2); // Get first two groups

  return (
    <Box className="fade-in">
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(33, 150, 243, 0.8) 100%), url(/hero-nature.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          borderRadius: 4,
          mb: 4,
          p: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2
          }}
        >
          Connect, Share & Make a Difference
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            maxWidth: '800px',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          Join the community of eco-conscious individuals working together
          for a more sustainable future.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/discover"
            startIcon={<PeopleIcon />}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              fontWeight: 600,
              px: 3
            }}
          >
            Join the Community
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/feed"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              fontWeight: 600,
              px: 3
            }}
          >
            Browse Activities
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* Impact Stats Section */}
        <Grid container spacing={3} sx={{ mb: 6, mt: 2 }}>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: theme.shadows[1],
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <Box sx={{ p: 1, bgcolor: 'primary.light', borderRadius: '50%', mb: 2 }}>
                <ForestOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                5,280
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Trees Planted
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: theme.shadows[1],
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <Box sx={{ p: 1, bgcolor: 'primary.light', borderRadius: '50%', mb: 2 }}>
                <WavesIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                324
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Beach Cleanups
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: theme.shadows[1],
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <Box sx={{ p: 1, bgcolor: 'primary.light', borderRadius: '50%', mb: 2 }}>
                <BoltIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                120
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Solar Installations
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: theme.shadows[1],
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <Box sx={{ p: 1, bgcolor: 'primary.light', borderRadius: '50%', mb: 2 }}>
                <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                12,560
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Community Members
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Featured Event Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3, fontWeight: 600 }}>
          Featured Event
        </Typography>

        <Paper
          elevation={2}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            mb: 6,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: theme.shadows[8]
            }
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 200, md: '100%' },
                  background: 'url(/events/forest-cleanup.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4 }}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {new Date(featuredEvent.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {featuredEvent.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {featuredEvent.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                    <strong>Location:</strong> {featuredEvent.location}
                  </Typography>
                  <Chip
                    label={`${featuredEvent.attendees} attending`}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/events"
                  sx={{ mr: 2 }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                >
                  RSVP
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Action Cards Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3, fontWeight: 600 }}>
          Get Involved
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[5]
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/action-track.jpg"
                alt="Track impact"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  <NatureIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h3">
                    Track Your Impact
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Log your daily eco-friendly activities and see your environmental impact grow over time. Earn badges and set goals.
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/tracking"
                  fullWidth
                >
                  Start Tracking
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[5]
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/action-events.jpg"
                alt="Join events"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  <VolunteerActivismIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h3">
                    Join Local Events
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Find and participate in environmental events happening in your area. From cleanups to workshops, make a difference in your community.
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/events"
                  fullWidth
                >
                  Find Events
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[5]
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image="/action-community.jpg"
                alt="Connect with community"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                  }}
                >
                  <PeopleIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h3">
                    Connect & Share
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Share your eco-friendly journey, connect with like-minded individuals, join groups, and inspire others with your environmental actions.
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/feed"
                  fullWidth
                >
                  Explore Feed
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Newsletter Section */}
        <Paper
          sx={{
            p: 4,
            mt: 6,
            mb: 6,
            borderRadius: 4,
            backgroundColor: 'primary.light',
            boxShadow: 'none'
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Stay Updated on Environmental Initiatives
              </Typography>
              <Typography variant="body1" paragraph>
                Subscribe to our newsletter to receive updates on events, initiatives, and tips for sustainable living.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.dark,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main
                    },
                    fontSize: '16px'
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src="/newsletter-illustration.svg"
                alt="Newsletter illustration"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '200px'
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage; 