import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
  Button,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';

// Import MUI icons individually from the correct paths
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import PhotoIcon from '@mui/icons-material/Photo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Import mock data
import { currentUser, feedPosts, impactData } from '../data/mockData';

const ProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="fade-in">
      {/* Cover Photo */}
      <Box
        sx={{
          height: { xs: 150, md: 300 },
          background: `url(${currentUser.coverPhoto || '/covers/default-cover.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          mb: { xs: 7, md: 8 },
          borderRadius: 2,
          boxShadow: theme.shadows[2],
        }}
      >
        {/* Profile Avatar */}
        <Avatar
          src={currentUser.avatar}
          sx={{
            width: { xs: 120, md: 180 },
            height: { xs: 120, md: 180 },
            border: '4px solid white',
            position: 'absolute',
            bottom: { xs: -60, md: -80 },
            left: { xs: 'calc(50% - 60px)', md: 50 },
            boxShadow: theme.shadows[3],
          }}
        />

        {/* Edit Profile Button */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          sx={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            borderRadius: 20
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Column - Profile Info */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 3,
                position: { xs: 'relative', md: 'sticky' },
                top: { md: 100 },
              }}
            >
              {/* Name and Username */}
              <Box sx={{
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 0, md: 7 }
              }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  {currentUser.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {currentUser.username}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Bio */}
              <Typography variant="body1" paragraph>
                {currentUser.bio}
              </Typography>

              {/* Location and Join Date */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon color="action" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {currentUser.location}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CalendarTodayIcon color="action" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Joined {currentUser.joinDate}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Stats */}
              <Grid container spacing={2} sx={{ textAlign: 'center', mb: 3 }}>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {currentUser.stats.posts}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Posts
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {currentUser.stats.following}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Following
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {currentUser.stats.followers}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Followers
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {currentUser.stats.impact}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Impact
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Interests */}
              <Typography variant="h6" gutterBottom>
                Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {currentUser.interests.map((interest, index) => (
                  <Chip
                    key={index}
                    label={interest}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Badges */}
              <Typography variant="h6" gutterBottom>
                Badges & Achievements
              </Typography>
              <Grid container spacing={1}>
                {currentUser.badges.map((badge) => (
                  <Grid item xs={6} key={badge.id}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 1,
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'action.hover',
                        }
                      }}
                    >
                      <Typography variant="h4" sx={{ mb: 1 }}>
                        {badge.icon}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {badge.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" align="center">
                        {badge.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column - Tabs and Content */}
          <Grid item xs={12} md={8}>
            {/* Tabs */}
            <Paper sx={{ borderRadius: 3, mb: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant={isMobile ? "scrollable" : "fullWidth"}
                scrollButtons={isMobile ? "auto" : false}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="Posts" />
                <Tab label="Impact" />
                <Tab label="Photos" />
                <Tab label="Events" />
              </Tabs>
            </Paper>

            {/* Tab Content */}
            <Box sx={{ mt: 3 }}>
              {/* Posts Tab */}
              {activeTab === 0 && (
                <Box>
                  {feedPosts.map((post) => (
                    <Paper
                      key={post.id}
                      elevation={1}
                      sx={{
                        mb: 3,
                        borderRadius: 3,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 3
                        }
                      }}
                    >
                      {/* Post Header */}
                      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar src={post.user.avatar} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {post.user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {post.timestamp} • {post.location}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Post Content */}
                      <Box sx={{ px: 2, pb: 2 }}>
                        <Typography variant="body1" paragraph>
                          {post.content}
                        </Typography>

                        {/* Tags */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {post.tags.map((tag, index) => (
                            <Chip
                              key={index}
                              label={`#${tag}`}
                              size="small"
                              color="primary"
                              variant="outlined"
                              clickable
                            />
                          ))}
                        </Box>
                      </Box>

                      {/* Post Image(s) */}
                      {post.images && post.images.length > 0 && (
                        <Box
                          component="img"
                          src={post.images[0]}
                          alt="Post image"
                          sx={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: 500,
                            objectFit: 'cover'
                          }}
                        />
                      )}

                      {/* Post Actions */}
                      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                          <IconButton color="primary">
                            <FavoriteIcon />
                          </IconButton>
                          <Typography variant="body2" component="span" sx={{ mr: 2 }}>
                            {post.likes}
                          </Typography>
                          <IconButton color="primary">
                            <CommentIcon />
                          </IconButton>
                          <Typography variant="body2" component="span">
                            {post.comments}
                          </Typography>
                        </Box>
                        <IconButton>
                          <ShareIcon />
                        </IconButton>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              )}

              {/* Impact Tab */}
              {activeTab === 1 && (
                <Box>
                  {/* Impact Summary Card */}
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                      color: 'white'
                    }}
                  >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Environmental Impact
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Your eco-friendly activities have made a significant positive impact on the environment.
                      Keep up the great work!
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {impactData.carbonSaved.value}<Typography variant="caption" component="span">{impactData.carbonSaved.unit}</Typography>
                          </Typography>
                          <Typography variant="body2">CO₂ Saved</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {impactData.waterSaved.value}<Typography variant="caption" component="span">{impactData.waterSaved.unit}</Typography>
                          </Typography>
                          <Typography variant="body2">Water Saved</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {impactData.wasteReduced.value}<Typography variant="caption" component="span">{impactData.wasteReduced.unit}</Typography>
                          </Typography>
                          <Typography variant="body2">Waste Reduced</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {impactData.treesPlanted.value}
                          </Typography>
                          <Typography variant="body2">Trees Planted</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>

                  {/* Daily Goals */}
                  <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Today's Eco Goals
                    </Typography>
                    <Box>
                      {impactData.dailyGoals.map((goal) => (
                        <Box
                          key={goal.id}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1.5,
                            borderBottom: '1px solid',
                            borderColor: 'divider'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                border: '2px solid',
                                borderColor: goal.completed ? 'primary.main' : 'divider',
                                backgroundColor: goal.completed ? 'primary.light' : 'transparent',
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {goal.completed && <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main' }} />}
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                textDecoration: goal.completed ? 'line-through' : 'none',
                                color: goal.completed ? 'text.secondary' : 'text.primary'
                              }}
                            >
                              {goal.name}
                            </Typography>
                          </Box>
                          <Chip
                            label={`+${goal.impact} impact`}
                            size="small"
                            color={goal.completed ? "primary" : "default"}
                            variant={goal.completed ? "filled" : "outlined"}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              )}

              {/* Photos Tab */}
              {activeTab === 2 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Photo Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    {feedPosts.flatMap(post =>
                      post.images ? post.images.map((image, index) => (
                        <Grid item xs={6} sm={4} md={4} key={`${post.id}-${index}`}>
                          <Card
                            sx={{
                              height: '100%',
                              borderRadius: 2,
                              transition: 'transform 0.2s',
                              '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 3
                              }
                            }}
                          >
                            <CardMedia
                              component="img"
                              height="200"
                              image={image}
                              alt={`Post image ${index + 1}`}
                              sx={{
                                objectFit: 'cover'
                              }}
                            />
                            <CardContent sx={{ p: 1.5 }}>
                              <Typography variant="body2" color="text.secondary">
                                {post.timestamp}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      )) : []
                    )}
                  </Grid>
                </Box>
              )}

              {/* Events Tab */}
              {activeTab === 3 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Upcoming & Past Events
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    No events to display at this time.
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage; 