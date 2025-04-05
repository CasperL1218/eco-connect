import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  useMediaQuery,
  Switch,
  Tooltip
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EventIcon from '@mui/icons-material/Event';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NatureIcon from '@mui/icons-material/Nature';
import { ThemeContext } from '../../contexts/ThemeContext';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Feed', icon: <RssFeedIcon />, path: '/feed' },
    { text: 'Discover', icon: <ExploreIcon />, path: '/discover' },
    { text: 'Events', icon: <EventIcon />, path: '/events' },
    { text: 'Impact Tracker', icon: <BarChartIcon />, path: '/tracking' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
        <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', mb: 1 }}>
          <NatureIcon fontSize="large" />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          EcoConnect
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={isActive(item.path)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'primary.light',
              },
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: isActive(item.path) ? 'primary.main' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
          mb: 2
        }}
      >
        <Brightness7Icon sx={{ opacity: darkMode ? 0.5 : 1 }} />
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          color="primary"
        />
        <Brightness4Icon sx={{ opacity: darkMode ? 1 : 0.5 }} />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NatureIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}>
              EcoConnect
            </Typography>
          </Box>

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4, flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color={isActive(item.path) ? 'primary' : 'inherit'}
                sx={{
                  mx: 1,
                  borderRadius: '20px',
                  px: 2,
                  backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? 'primary.light' : 'action.hover',
                  }
                }}
                startIcon={item.icon}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            )}
            <Avatar
              sx={{
                ml: 2,
                cursor: 'pointer',
                bgcolor: 'primary.main',
                '&:hover': {
                  boxShadow: '0 0 0 2px ' + theme.palette.primary.light,
                }
              }}
              component={Link}
              to="/profile"
            >
              U
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer (permanent) */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: 250,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box', borderRight: '1px solid rgba(0, 0, 0, 0.12)', mt: 8 },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}

      {/* Toolbar spacing */}
      <Toolbar />
    </>
  );
};

export default Navigation; 