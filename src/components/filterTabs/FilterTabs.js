import React from "react";
import PostListItem from "../postListItem/PostListItem";
import Spinner from "../spinner/Spinner";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

const FilterTabs = ({ posts, value, setValue, loading }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="filter-tabs"
          centered
        >
          <Tab label="All" value="all" />
          <Tab label="You posts" value="user" />
        </Tabs>
        {loading ? <Spinner /> : null}
        <TabPanel value="all">
          {posts?.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </TabPanel>
        <TabPanel value="user">
          {posts?.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default FilterTabs;
