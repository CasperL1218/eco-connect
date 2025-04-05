import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Divider,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
// Import MUI icons individually from the correct paths
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CategoryIcon from '@mui/icons-material/Category';
import FilterListIcon from '@mui/icons-material/FilterList';
import { format } from 'date-fns';

// Import mock data
import { events } from '../data/mockData';

const EventsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [eventView, setEventView] = useState(0);
  const [savedEvents, setSavedEvents] = useState({});

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleViewChange = (event, newValue) => {
    setEventView(newValue);
  };

  const toggleSaveEvent = (eventId) => {
    setSavedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  // Filter events based on search query and category
  const getFilteredEvents = () => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = filterCategory === 'all' || event.category === filterCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const filteredEvents = getFilteredEvents();

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Separate upcoming and past events (using current date as reference)
  const now = new Date();
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) > now);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) <= now);

  // Get events based on selected tab
  const displayEvents = eventView === 0 ? upcomingEvents : pastEvents;

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'EEEE, MMMM d, yyyy • h:mm a');
  };

  return (
    <Box className="fade-in">
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Environmental Events
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Join eco-friendly events in your area and make a positive impact on the environment.
          </Typography>
        </Box>

        {/* Featured Event */}
        <Card
          sx={{
            mb: 5,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: theme.shadows[3],
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: theme.shadows[6]
            }
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height={isMobile ? 200 : 400}
                image="/events/forest-cleanup.jpg"
                alt="Featured event"
                sx={{ objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 'auto' }}>
                  <Chip
                    label="Featured Event"
                    color="primary"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                    {events[0].title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarTodayIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatEventDate(events[0].date)}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {events[0].location}
                    </Typography>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {events[0].description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mr: 1 }}>
                      Organizer:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {events[0].organizer}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PeopleIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      <strong>{events[0].attendees}</strong> people attending
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    RSVP Now
                  </Button>
                  <IconButton
                    color="primary"
                    onClick={() => toggleSaveEvent(events[0].id)}
                    sx={{ border: '1px solid', borderColor: 'divider' }}
                  >
                    {savedEvents[events[0].id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                  </IconButton>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        {/* Search and Filters */}
        <Paper elevation={1} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                placeholder="Search events by name, description, or location"
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
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category-filter-label">Category</InputLabel>
                <Select
                  labelId="category-filter-label"
                  id="category-filter"
                  value={filterCategory}
                  onChange={handleCategoryChange}
                  label="Category"
                  startAdornment={
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="Cleanup">Cleanup</MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Volunteer">Volunteer</MenuItem>
                  <MenuItem value="Workshop">Workshop</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Tabs
                value={eventView}
                onChange={handleViewChange}
                variant="fullWidth"
                aria-label="event view tabs"
              >
                <Tab label="Upcoming Events" />
                <Tab label="Past Events" />
              </Tabs>
            </Grid>
          </Grid>
        </Paper>

        {/* Event List */}
        <Box sx={{ mb: 4 }}>
          {displayEvents.length > 0 ? (
            <Grid container spacing={3}>
              {displayEvents.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height={180}
                      image={event.image || '/events/default-event.jpg'}
                      alt={event.title}
                    />
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                          {event.title}
                        </Typography>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => toggleSaveEvent(event.id)}
                        >
                          {savedEvents[event.id] ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
                        </IconButton>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarTodayIcon fontSize="small" color="action" sx={{ mr: 1, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {format(new Date(event.date), 'MMM d, yyyy')}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon fontSize="small" color="action" sx={{ mr: 1, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary" noWrap>
                          {event.location}
                        </Typography>
                      </Box>

                      <Typography variant="body2" sx={{ mb: 2, maxHeight: 80, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {event.description}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PeopleIcon fontSize="small" color="action" sx={{ mr: 1, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {event.attendees} attending
                        </Typography>
                      </Box>

                      <Chip
                        label={event.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        variant={event.isAttending ? "contained" : "outlined"}
                        sx={{ borderRadius: 20 }}
                      >
                        {event.isAttending ? "Attending" : "RSVP"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper
              elevation={1}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3
              }}
            >
              <Typography variant="h6" gutterBottom>
                No events found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your filters or search criteria.
              </Typography>
            </Paper>
          )}
        </Box>

        {/* Create Event CTA */}
        <Paper
          elevation={1}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            backgroundColor: 'primary.light',
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Have an Eco-Friendly Event Idea?
          </Typography>
          <Typography variant="body1" paragraph>
            Create and organize your own environmental event to make a positive impact in your community.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: theme.palette.primary.dark,
              '&:hover': {
                backgroundColor: theme.palette.primary.main
              }
            }}
          >
            Create an Event
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default EventsPage; 