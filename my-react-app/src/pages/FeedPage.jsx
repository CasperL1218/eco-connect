import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  Divider,
  Grid,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Menu,
  MenuItem,
  InputAdornment,
  Tab,
  Tabs,
  useTheme
} from '@mui/material';
// Import MUI icons individually from the correct paths
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FilterListIcon from '@mui/icons-material/FilterList';

// Import mock data
import { currentUser, feedPosts } from '../data/mockData';

const FeedPage = () => {
  const theme = useTheme();
  const [postContent, setPostContent] = useState('');
  const [feedFilter, setFeedFilter] = useState(0);
  const [likedPosts, setLikedPosts] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleCreatePost = () => {
    alert('Post created: ' + postContent);
    setPostContent('');
  };

  const handleLikePost = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleFeedFilterChange = (event, newValue) => {
    setFeedFilter(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFilterMenuOpen = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterAnchorEl(null);
  };

  // Filter posts based on the selected tab
  const getFilteredPosts = () => {
    if (feedFilter === 0) {
      return feedPosts; // All posts
    } else if (feedFilter === 1) {
      return feedPosts.filter(post => post.user.id === currentUser.id); // My posts
    } else if (feedFilter === 2) {
      return feedPosts.filter(post => post.tags.includes('TreePlanting')); // Tree planting
    } else if (feedFilter === 3) {
      return feedPosts.filter(post => post.tags.includes('BeachCleanup')); // Beach cleanup
    }
    return feedPosts;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <Box className="fade-in">
      <Container maxWidth="md">
        {/* Create Post Card */}
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar src={currentUser.avatar} alt={currentUser.name} />
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Share your eco-friendly activity..."
                value={postContent}
                onChange={handlePostContentChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <ImageIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="add location" component="span">
                    <LocationOnIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="add emoji" component="span">
                    <EmojiEmotionsIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCreatePost}
                  disabled={!postContent.trim()}
                  sx={{ borderRadius: 20, px: 3 }}
                >
                  Post
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Feed Filter Tabs */}
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tabs
            value={feedFilter}
            onChange={handleFeedFilterChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="feed filter tabs"
          >
            <Tab label="All Posts" />
            <Tab label="My Posts" />
            <Tab label="Tree Planting" />
            <Tab label="Beach Cleanup" />
          </Tabs>

          <Box>
            <IconButton
              aria-label="filter menu"
              aria-controls="filter-menu"
              aria-haspopup="true"
              onClick={handleFilterMenuOpen}
            >
              <FilterListIcon />
            </IconButton>
            <Menu
              id="filter-menu"
              anchorEl={filterAnchorEl}
              keepMounted
              open={Boolean(filterAnchorEl)}
              onClose={handleFilterMenuClose}
            >
              <MenuItem onClick={handleFilterMenuClose}>Most Recent</MenuItem>
              <MenuItem onClick={handleFilterMenuClose}>Most Popular</MenuItem>
              <MenuItem onClick={handleFilterMenuClose}>Most Impactful</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Feed Posts */}
        {filteredPosts.length > 0 ? (
          <Box sx={{ mb: 4 }}>
            {filteredPosts.map((post) => (
              <Card
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
                <CardHeader
                  avatar={
                    <Avatar src={post.user.avatar} aria-label="user avatar">
                      {post.user.name.charAt(0)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" onClick={handleMenuOpen}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {post.user.name}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        {post.timestamp}
                      </Typography>
                      {post.location && (
                        <>
                          <Typography variant="body2" color="text.secondary" sx={{ mx: 0.5 }}>
                            •
                          </Typography>
                          <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5, fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {post.location}
                          </Typography>
                        </>
                      )}
                    </Box>
                  }
                />

                <CardContent sx={{ py: 1 }}>
                  <Typography variant="body1" paragraph>
                    {post.content}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
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
                </CardContent>

                {post.images && post.images.length > 0 && (
                  <CardMedia
                    component="img"
                    height="300"
                    image={post.images[0]}
                    alt="Post image"
                    sx={{ objectFit: 'cover' }}
                  />
                )}

                <CardActions sx={{ px: 2, py: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      aria-label="like post"
                      color={likedPosts[post.id] ? "primary" : "default"}
                      onClick={() => handleLikePost(post.id)}
                    >
                      {likedPosts[post.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {post.likes + (likedPosts[post.id] ? 1 : 0)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <IconButton aria-label="comment">
                      <CommentIcon />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {post.comments}
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>

                {/* Comments (hidden by default) */}
                {/*
                <Box sx={{ px: 2, py: 1 }}>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Avatar
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      sx={{ width: 32, height: 32 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Write a comment..."
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton size="small">
                              <EmojiIcon fontSize="small" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
                */}
              </Card>
            ))}
          </Box>
        ) : (
          <Paper
            elevation={1}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              No posts to display
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Adjust your filters or create a new post.
            </Typography>
          </Paper>
        )}
      </Container>

      {/* Post Options Menu */}
      <Menu
        id="post-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Save Post</MenuItem>
        <MenuItem onClick={handleMenuClose}>Hide Post</MenuItem>
        <MenuItem onClick={handleMenuClose}>Report Post</MenuItem>
      </Menu>
    </Box>
  );
};

export default FeedPage; 