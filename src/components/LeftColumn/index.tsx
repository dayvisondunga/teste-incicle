import React from 'react';
import { data } from '../../api/data.json';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from './styles';
import { CardActions, Tooltip } from '@mui/material';
import { MoreHoriz } from '@styled-icons/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const LeftColumn: React.FC = () => {
  return (
    <Container>
      <CardActionArea>
        <Grid container direction="row" spacing={2.5} justifyContent='space-between'>
          <div className='posts'>
            { data.map(post => {
              const isEvent = post.type === 'event';
              return(
                <Card className='card'>
                  <Grid item xs={12} sm={2.5} display="flex" justifyContent='space-between'>
                    <CardMedia className='img-card'
                      component="img"
                      image={"https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"}
                      alt="Cubo vermelho, com pontos brancos em um fundo escuro"
                    />
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <CardContent>
                      
                      <Typography variant="h6" gutterBottom component="div">
                        {post.title}
                      </Typography>

                      <div>
                        <span className={isEvent ? "type2" : "type"} > { post.type }</span>
                        <label>{post.date} </label>
                      </div>

                      <div className='vazia'/>


                      

                      <Typography variant="body2" color="text.secondary">
                          {post.description}
                      </Typography>

                    </CardContent>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <CardActions>
                      <Tooltip title="Mais" placement="right-end">
                        <Button>
                          <MoreHoriz className="moreButton" fontSize="small" />
                        </Button>
                      </Tooltip>
                    </CardActions>
                  </Grid>
                </Card>
              )
            })}
          </div>
        </Grid>
        <Grid item xs={4} sm={2} direction="row">
          <div className="rightBlock">
            <Alert icon={false} severity="warning">
              <AlertTitle><strong>Endomarketing</strong></AlertTitle>
              <Typography variant="body2">
                Endomarketing está relacionado às ações de treinamento ou qualificação
                dos colaboradores da empresa visando um melhor serviço para o cliente.
                Marketing interno, devido ao nome, é usualmente confundido com Endomarketing
                mesmo sendo conceitos diferentes.
              </Typography>
              <Button color="inherit" size="small" variant="outlined">
                  DISPENSAR
              </Button>
            </Alert>
          </div>
          <div className='quadros righBlock'>
            <div className='quadrosInnerContainer'>
              <Typography variant="subtitle1" gutterBottom><strong>Quadros de Gestão à Vista</strong></Typography>

              <div className='quadro'>
                
              </div>
            </div>
          </div>
        </Grid>
      </CardActionArea>
    </Container>
  );
}

export default LeftColumn;