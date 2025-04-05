import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Tab,
  Tabs,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  useTheme,
  useMediaQuery
} from '@mui/material';
// Import MUI icons individually from the correct paths
import NatureIcon from '@mui/icons-material/Nature';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ParkIcon from '@mui/icons-material/Park';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';

// Import Chart components
// In a real project, we would use:
// import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Import mock data
import { impactData, suggestions } from '../data/mockData';

// Mock Chart component since we're not actually implementing charts
const MockChart = ({ type, data, height = 200 }) => {
  return (
    <Box
      sx={{
        height,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        borderRadius: 2,
        p: 2
      }}
    >
      <Typography color="text.secondary">
        {type} Chart Visualization (Mock)
      </Typography>
    </Box>
  );
};

const TrackingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [timeFrame, setTimeFrame] = useState(0);

  const handleTimeFrameChange = (event, newValue) => {
    setTimeFrame(newValue);
  };

  const toggleGoal = (goalId) => {
    // In a real app, this would update the goal's completed status
    console.log('Toggle goal:', goalId);
  };

  // Helper function to render impact stat cards
  const renderImpactCard = (title, value, unit, change, color, icon) => (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 3
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${color}.light`,
              color: `${color}.main`,
              mr: 1.5
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>

        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {value}
          <Typography component="span" variant="body1" sx={{ ml: 0.5 }}>
            {unit}
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            icon={<ArrowUpwardIcon fontSize="small" />}
            label={`+${change}%`}
            size="small"
            color={color}
            sx={{ borderRadius: 1, height: 24 }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            from last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box className="fade-in">
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Environmental Impact Tracker
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Monitor your positive impact on the environment and set eco-friendly goals.
          </Typography>
        </Box>

        {/* Impact Summary */}
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(33, 150, 243, 0.8) 100%)',
            color: 'white',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Your Environmental Impact
              </Typography>
              <Typography variant="body1" paragraph>
                You're in the top 15% of eco-conscious users! Your actions have made a significant positive impact on the environment.
              </Typography>
              <Button
                variant="contained"
                startIcon={<ShareIcon />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }
                }}
              >
                Share Your Impact
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: 180, width: '100%' }}>
                <MockChart type="Radial" height={180} />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Impact Statistics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} lg={4}>
            {renderImpactCard(
              'Carbon Saved',
              impactData.carbonSaved.value,
              impactData.carbonSaved.unit,
              impactData.carbonSaved.change,
              'success',
              <NatureIcon />
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            {renderImpactCard(
              'Water Saved',
              impactData.waterSaved.value,
              impactData.waterSaved.unit,
              impactData.waterSaved.change,
              'info',
              <LocalDrinkIcon />
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            {renderImpactCard(
              'Waste Reduced',
              impactData.wasteReduced.value,
              impactData.wasteReduced.unit,
              impactData.wasteReduced.change,
              'warning',
              <DeleteOutlineIcon />
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            {renderImpactCard(
              'Trees Planted',
              impactData.treesPlanted.value,
              impactData.treesPlanted.unit,
              impactData.treesPlanted.change,
              'success',
              <ParkIcon />
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            {renderImpactCard(
              'Cleanups Joined',
              impactData.cleanups.value,
              impactData.cleanups.unit,
              impactData.cleanups.change,
              'info',
              <BeachAccessIcon />
            )}
          </Grid>
        </Grid>

        {/* Progress Graphs */}
        <Paper elevation={1} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              Progress Over Time
            </Typography>
            <Tabs
              value={timeFrame}
              onChange={handleTimeFrameChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="timeframe tabs"
            >
              <Tab label="Week" />
              <Tab label="Month" />
              <Tab label="6 Months" />
              <Tab label="Year" />
            </Tabs>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <MockChart type="Line" height={300} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Impact Breakdown
              </Typography>
              <MockChart type="Doughnut" height={200} />
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: 'success.main', mr: 1 }} />
                  <Typography variant="body2">Carbon Reduction (45%)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: 'info.main', mr: 1 }} />
                  <Typography variant="body2">Water Conservation (25%)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: 'warning.main', mr: 1 }} />
                  <Typography variant="body2">Waste Management (20%)</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: 'error.main', mr: 1 }} />
                  <Typography variant="body2">Reforestation (10%)</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Daily Goals and Suggestions */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Daily Goals */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Today's Eco Goals
                </Typography>
                <IconButton color="primary">
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>

              <List>
                {impactData.dailyGoals.map((goal) => (
                  <ListItem key={goal.id} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={goal.completed}
                        onChange={() => toggleGoal(goal.id)}
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            textDecoration: goal.completed ? 'line-through' : 'none',
                            color: goal.completed ? 'text.secondary' : 'text.primary'
                          }}
                        >
                          {goal.name}
                        </Typography>
                      }
                    />
                    <Chip
                      label={`+${goal.impact} impact`}
                      size="small"
                      color={goal.completed ? "primary" : "default"}
                      variant={goal.completed ? "filled" : "outlined"}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Daily Progress
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Box sx={{ flexGrow: 1, mr: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(76, 175, 80, 0.2)'
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    60%
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Suggestions */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                Suggestions for Improvement
              </Typography>

              {suggestions.slice(0, 3).map((suggestion) => (
                <Box
                  key={suggestion.id}
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'background.default',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(5px)',
                      boxShadow: 1
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h5" sx={{ mr: 1 }}>
                      {suggestion.icon}
                    </Typography>
                    <Typography variant="h6">
                      {suggestion.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph sx={{ ml: 4 }}>
                    {suggestion.description}
                  </Typography>
                  <Box sx={{ display: 'flex', ml: 4 }}>
                    <Chip
                      label={`Difficulty: ${suggestion.difficulty}`}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={`Impact: ${suggestion.impact}`}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              ))}

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button color="primary">
                  View More Suggestions
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrackingPage; 