import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  useTheme,
  Divider,
  IconButton,
  useMediaQuery
} from '@mui/material';

// Import MUI icons individually from the correct paths
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Import mock data
import { groups, currentUser } from '../data/mockData';

const DiscoveryPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(prevFilter => prevFilter === category ? 'all' : category);
  };

  // Filter groups based on search and category
  const filteredGroups = groups.filter(group => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || group.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Categories used for filtering
  const categories = [
    { name: 'Volunteer', icon: <PeopleIcon /> },
    { name: 'Gardening', icon: <EmojiNatureIcon /> },
    { name: 'Advocacy', icon: <PublicIcon /> },
    { name: 'Lifestyle', icon: <ForestOutlinedIcon /> },
    { name: 'Conservation', icon: <WaterOutlinedIcon /> }
  ];

  // Suggested users list - in a real app, these would come from an algorithm
  const suggestedUsers = [
    {
      id: 5,
      name: 'Michael Rivers',
      avatar: '/avatars/michael.jpg',
      bio: 'Climate scientist | Renewable energy advocate',
      mutualConnections: 12
    },
    {
      id: 6,
      name: 'Laura Pine',
      avatar: '/avatars/laura.jpg',
      bio: 'Permaculture designer | Sustainable farming',
      mutualConnections: 8
    },
    {
      id: 7,
      name: 'Portland Clean Energy',
      avatar: '/avatars/pce.jpg',
      bio: 'Non-profit supporting local clean energy projects',
      mutualConnections: 15
    }
  ];

  return (
    <Box className="fade-in">
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Discover Communities
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Find and join eco-conscious groups and connect with like-minded individuals.
          </Typography>
        </Box>

        {/* Search and Filter Bar */}
        <Paper elevation={1} sx={{ mb: 4, p: 3, borderRadius: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                placeholder="Search for communities, topics, or interests..."
                value={searchQuery}
                onChange={handleSearchChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {categories.map((category) => (
                  <Chip
                    key={category.name}
                    icon={category.icon}
                    label={category.name}
                    clickable
                    color={categoryFilter === category.name ? "primary" : "default"}
                    onClick={() => handleCategoryFilterChange(category.name)}
                    variant={categoryFilter === category.name ? "filled" : "outlined"}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Left Column - Groups */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                aria-label="discovery tabs"
              >
                <Tab
                  icon={<GroupIcon />}
                  label="Communities"
                  iconPosition="start"
                />
                <Tab
                  icon={<PeopleIcon />}
                  label="People"
                  iconPosition="start"
                />
              </Tabs>
            </Box>

            {/* Communities Tab */}
            {tabValue === 0 && (
              <Box>
                {filteredGroups.length > 0 ? (
                  <Grid container spacing={3}>
                    {filteredGroups.map((group) => (
                      <Grid item xs={12} sm={6} key={group.id}>
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 3,
                            transition: 'transform 0.2s',
                            overflow: 'hidden',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              boxShadow: 3
                            }
                          }}
                        >
                          <CardMedia
                            component="img"
                            height={140}
                            image={group.image || '/groups/default-group.jpg'}
                            alt={group.name}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                              {group.name}
                            </Typography>
                            <Chip
                              label={group.category}
                              size="small"
                              color="primary"
                              sx={{ mb: 2 }}
                            />
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {group.description}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <PeopleIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                              <Typography variant="body2" color="text.secondary">
                                {group.members} members
                              </Typography>
                            </Box>
                          </CardContent>
                          <CardActions sx={{ p: 2 }}>
                            <Button
                              variant={group.isJoined ? "outlined" : "contained"}
                              color="primary"
                              fullWidth
                              startIcon={group.isJoined ? null : <AddIcon />}
                            >
                              {group.isJoined ? "Joined" : "Join Group"}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      No communities found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Try adjusting your search criteria or create a new community.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      startIcon={<AddIcon />}
                    >
                      Create Community
                    </Button>
                  </Paper>
                )}
              </Box>
            )}

            {/* People Tab */}
            {tabValue === 1 && (
              <Paper elevation={1} sx={{ borderRadius: 3, p: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ px: 2, pt: 1 }}>
                  Recommended Connections
                </Typography>
                <List>
                  {suggestedUsers.map((user) => (
                    <Box key={user.id}>
                      <ListItem
                        sx={{
                          py: 2,
                          '&:hover': {
                            backgroundColor: 'action.hover',
                            borderRadius: 2
                          }
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar
                            src={user.avatar}
                            alt={user.name}
                            sx={{
                              width: 50,
                              height: 50,
                              mr: 1
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {user.name}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography variant="body2" component="span" sx={{ display: 'block' }}>
                                {user.bio}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {user.mutualConnections} mutual connections
                              </Typography>
                            </>
                          }
                          sx={{ mr: 2 }}
                        />
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<PersonAddIcon />}
                          sx={{ minWidth: 120 }}
                        >
                          Connect
                        </Button>
                      </ListItem>
                      <Divider component="li" />
                    </Box>
                  ))}
                </List>
              </Paper>
            )}
          </Grid>

          {/* Right Column - Suggested Content & Info */}
          <Grid item xs={12} md={4}>
            {/* Join the Network Card */}
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(33, 150, 243, 0.8) 100%)',
                color: 'white'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Grow Your Network
              </Typography>
              <Typography variant="body2" paragraph>
                Connect with eco-conscious individuals and organizations to amplify your environmental impact.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
                }}
              >
                Invite Friends
              </Button>
            </Paper>

            {/* Your Communities */}
            <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Your Communities
              </Typography>
              <List sx={{ py: 0 }}>
                {groups.filter(group => group.isJoined).map((group) => (
                  <ListItem key={group.id} disableGutters sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        src={group.image}
                        alt={group.name}
                        variant="rounded"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={group.name}
                      secondary={`${group.members} members`}
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
              >
                View All
              </Button>
            </Paper>

            {/* Create Community Card */}
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Start Your Own Community
              </Typography>
              <Typography variant="body2" paragraph color="text.secondary">
                Have a passion for a specific environmental cause? Create a community and connect with others who share your interest.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Create Community
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DiscoveryPage; 