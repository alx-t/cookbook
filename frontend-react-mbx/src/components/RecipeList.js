import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import views from '../views';

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Button
} from '@material-ui/core/'
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
}))

const RecipeList = inject('rootStore')(
  observer(({ rootStore }) => {
    const { recipeStore } = rootStore;
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
          >
            {recipeStore.recipes.map(t => (
              <Grid item xs={12} sm={6} md={3} key={t.id}>
                <Card className={classes.card}>
                  <CardHeader
                    title={t.title}
                  />
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={t.image_url}
                    />
                    <CardContent>
                      <Typography component="p" style={{minHeight: '90px', overflow: 'scroll'}}>
                        {t.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon color="primary" />
                    </IconButton>
                  </CardActions>
                </Card>
               </Grid>
            ))}
          </Grid>
      </div>
    )
  })
)

export default RecipeList

// <button onClick={() => router.setView(views.recipe, { recipeId: t.id })}>open</button>
// <button onClick={t.remove}>x</button>
// <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
