import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const SearchResultsList = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Avatar with text
              </Typography>

                    <List>
                        {generate(
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText

                                />
                            </ListItem>,
                        )}
                    </List>

                </Grid>
            </Grid>
        </>
    )
}

export default SearchResultsList;