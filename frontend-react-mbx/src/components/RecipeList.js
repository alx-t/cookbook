import React from 'react';
import { inject, observer } from 'mobx-react';
// import { RouterStore, View, startRouter, StateRouter, Link } from 'mobx-state-tree-router';

import views from '../views';

import { makeStyles } from '@material-ui/core/styles';
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
  Button,
  // ButtonBase
  Link
} from '@material-ui/core';
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
    const { router } = rootStore;
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
                <CardHeader title={t.title} />
                <CardActionArea>
                  <Link onClick={() => router.setView(views.recipe, { recipeId: t.id })} >
                    <CardMedia className={classes.media} image={t.image_url} />
                    <CardContent>
                      <Typography component="p" style={{minHeight: '90px', overflow: 'scroll'}}>
                        {t.description}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions className={classes.actions}>
                  <Button size="small" color="primary" onClick={() => router.setView(views.recipe, { recipeId: t.id })}>
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

// <button onClick={t.remove}>x</button>
// <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
