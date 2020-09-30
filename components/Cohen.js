import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import Slider from '@material-ui/core/Slider';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const questions = [
  {id: 'b1', question: 'B.1. In the past month, how often have you been upset because of something that happened unexpectedly?', 
    answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]
  },
  {id: 'b2', question: 'B.2. In the past month, how often have you felt unable to control the important things in your life?', 
  answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]},
  {id: 'b3', question: 'B.3. In the past month, how often have you felt nervous or stressed?', 
  answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]},
  {id: 'b6', question: 'B.6. In the past month, how often have you found that you could not cope with  all the things you had to do?', 
  answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]},
  {id: 'b9', question: 'B.9. In the past month, how often have you been angry because of things that happened that were outside of your control?', answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]},
  {id: 'b10', question: 'B.10. In the past month, how often have you felt that difficulties were piling up so high that you could not overcome them?', answers: [{value: '0', answer: 'NEVER'}, {value: '1', answer: 'ALMOST NEVER'}, {value: '2', answer: 'SOMETIMES'}, {value: '3', answer: 'FAIRLY OFTEN'},	{value: '4', answer: 'VERY OFTEN'}]},
  {id: 'b4', question: 'B.4. In the past month, how often have you felt confident about your ability to handle personal problems?', answers: [{value: '0', answer: 'VERY OFTEN'}, {value: '1', answer:'FAIRLY OFTEN' }, {value: '2', answer:'SOMETIMES' }, {value: '3', answer:'ALMOST NEVER' }, {value: '4', answer:'NEVER' }]},
  {id: 'b5', question: 'B.5. In the past month, how often have you felt that things were going your way?', answers: [{value: '0', answer: 'VERY OFTEN'}, {value: '1', answer:'FAIRLY OFTEN' }, {value: '2', answer:'SOMETIMES' }, {value: '3', answer:'ALMOST NEVER' }, {value: '4', answer:'NEVER' }]},
  {id: 'b7', question: 'B.7. In the past month, how often have you been able to control irritations in your life?', answers: [{value: '0', answer: 'VERY OFTEN'}, {value: '1', answer:'FAIRLY OFTEN' }, {value: '2', answer:'SOMETIMES' }, {value: '3', answer:'ALMOST NEVER' }, {value: '4', answer:'NEVER' }]},
  {id: 'b8', question: 'B.8. In the past month, how often have you felt that you were on top of things?', answers: [{value: '0', answer: 'VERY OFTEN'}, {value: '1', answer:'FAIRLY OFTEN' }, {value: '2', answer:'SOMETIMES' }, {value: '3', answer:'ALMOST NEVER' }, {value: '4', answer:'NEVER' }]},  
  {id: 'a1', question: 'A1. I feel tense or wound up', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'Occasionally'}, {value: '2', answer: 'A lot of the time'},  {value: '3', answer: 'Most of the time'}] },
  {id: 'a2', question: 'A2.I get a sort of frightened feeling as if something bad is about to happen', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'A little, but it does not worry me'}, {value: '2', answer: 'Yes, but not too badly'},  {value: '3', answer: 'Very definitely and quite badly'}]},
  {id: 'a3', question: 'A3. Worrying thoughts go through my mind', answers: [{value: '0', answer: 'Only occasionally'}, {value: '1', answer: 'From time to time but not too often'}, {value: '2', answer: 'A lot of time'},  {value: '3', answer: 'A great deal of time'}]},
  {id: 'a4', question: 'A4. I can sit at ease and feel relaxed', answers: [{value: '0', answer: 'Definitely'}, {value: '1', answer: 'Usually'}, {value: '2', answer: 'Not often'},  {value: '3', answer: 'Not at all'}]},
  {id: 'a5', question: 'A5. I get a sort of frightened feeling like butterflies in the stomach', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'Occasionally'}, {value: '2', answer: 'Quite often'},  {value: '3', answer: 'Very often'}]},
  {id: 'a6', question: 'A6, I feel restless and have to be on the move', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'Not very much'}, {value: '2', answer: 'Quite a lot'},  {value: '3', answer: 'Very much indeed'}]},
  {id: 'a7', question: 'A7. I get sudden feelings of panic', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'Not very often'}, {value: '2', answer: 'Quite often'},  {value: '3', answer: 'Very often indeed'}]},
  {id: 'd1', question: 'D1.I still enjoy the things I used to enjoy', answers: [{value: '0', answer: 'Definitely as much'}, {value: '1', answer: 'Not quite so match'}, {value: '2', answer: 'Only a little'},  {value: '3', answer: 'Hardy at all'}]},
  {id: 'd2', question: 'D2.I can laugh and see the funny side of things', answers: [{value: '0', answer: 'As much as I always could'}, {value: '1', answer: 'Not quite so much now'}, {value: '2', answer: 'Definitely not so much now'},  {value: '3', answer: 'Not at all'}]},
  {id: 'd3', question: 'D3.I feel cheerful', answers: [{value: '0', answer: 'Most of the time'}, {value: '1', answer: 'Sometimes'}, {value: '2', answer: 'Not often'},  {value: '3', answer: 'Not at all'}]},
  {id: 'd4', question: 'D4.I feel as if I am slowed down', answers: [{value: '0', answer: 'Not at all'}, {value: '1', answer: 'Sometimes'}, {value: '2', answer: 'Very often'},  {value: '3', answer: 'Nearly all the time'}]},
  {id: 'd5', question: 'D5.I have lost interest in my appearance', answers: [{value: '0', answer: 'I take just as much care as ever'}, {value: '1', answer: 'I may not take quite as much care'}, {value: '2', answer: 'I do not take as much care as I should'},  {value: '3', answer: 'Definitely'}]},
  {id: 'd6', question: 'D6.I look forward with enjoyment to things', answers: [{value: '0', answer: 'As much as I ever did'}, {value: '1', answer: 'Rather less than I used to'}, {value: '2', answer: 'Definitely less than I used too'},  {value: '3', answer: 'Hardly at all'}]},
  {id: 'd7', question: 'D7.I can enjoy a good book or radio or TV programme', answers: [{value: '0', answer: 'Often'}, {value: '1', answer: 'Sometimes'}, {value: '2', answer: 'Not often'},  {value: '3', answer: 'Very seldom'}]},
  
]

export default function Cohen(props) {
  
  return (
    <Container>
      <Grid container spacing={2} direction="column" alignItems="flex-start">
        <Typography gutterBottom variant="h6" style={{marginBottom: 12, marginTop: 24, fontWeight: 'bold'}}>COHEN / HADS </Typography>
        {
          questions.map(data => (
          <Grid item key={data.id} >
            <Typography variant="body1" gutterBottom>
              {data.question}
            </Typography>
            <ToggleButtonGroup  size="small"
              value={
                props.b1.id === data.id ? props.b1.value : 
                props.b2.id === data.id ? props.b2.value :
                props.b3.id === data.id ? props.b3.value :
                props.b6.id === data.id ? props.b6.value :
                props.b9.id === data.id ? props.b9.value :
                props.b10.id === data.id ? props.b10.value :
                props.b4.id === data.id ? props.b4.value :
                props.b5.id === data.id ? props.b5.value :
                props.b7.id === data.id ? props.b7.value :
                props.b8.id === data.id ? props.b8.value :
                props.a1.id === data.id ? props.a1.value :
                props.a2.id === data.id ? props.a2.value :
                props.a3.id === data.id ? props.a3.value :
                props.a4.id === data.id ? props.a4.value :
                props.a5.id === data.id ? props.a5.value :
                props.a6.id === data.id ? props.a6.value :
                props.a7.id === data.id ? props.a7.value :
                props.d1.id === data.id ? props.d1.value :
                props.d2.id === data.id ? props.d2.value :
                props.d3.id === data.id ? props.d3.value :
                props.d4.id === data.id ? props.d4.value :
                props.d5.id === data.id ? props.d5.value :
                props.d6.id === data.id ? props.d6.value :
                props.d7.id === data.id ? props.d7.value : ''
              }
              exclusive
              onChange={
                props.b1.id === data.id ? props.b1.onChange : 
                props.b2.id === data.id ? props.b2.onChange :
                props.b3.id === data.id ? props.b3.onChange :
                props.b6.id === data.id ? props.b6.onChange :
                props.b9.id === data.id ? props.b9.onChange :
                props.b10.id === data.id ? props.b10.onChange :
                props.b4.id === data.id ? props.b4.onChange :
                props.b5.id === data.id ? props.b5.onChange :
                props.b7.id === data.id ? props.b7.onChange :
                props.b8.id === data.id ? props.b8.onChange :
                props.a1.id === data.id ? props.a1.onChange :
                props.a2.id === data.id ? props.a2.onChange :
                props.a3.id === data.id ? props.a3.onChange :
                props.a4.id === data.id ? props.a4.onChange :
                props.a5.id === data.id ? props.a5.onChange :
                props.a6.id === data.id ? props.a6.onChange :
                props.a7.id === data.id ? props.a7.onChange :
                props.d1.id === data.id ? props.d1.onChange :
                props.d2.id === data.id ? props.d2.onChange :
                props.d3.id === data.id ? props.d3.onChange :
                props.d4.id === data.id ? props.d4.onChange :
                props.d5.id === data.id ? props.d5.onChange :
                props.d6.id === data.id ? props.d6.onChange :
                props.d7.id === data.id ? props.d7.onChange : ''
              }
            >
              {
                data.answers.map(ans => (
                  <ToggleButton key={ans.value} value={ans.value} style={{marginBottom: 12}}>
                    {ans.answer}
                  </ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </Grid>
          ))
        }
          
        <Grid item align="left">
          {
            props.b1.value &&  props.b2.value &&  props.b3.value &&  props.b6.value &&  props.b9.value &&  props.b10.value &&  props.b4.value &&  props.b5.value &&  props.b7.value &&  props.b8.value &&  props.a1.value &&  props.a2.value &&  props.a3.value &&  props.a4.value &&  props.a5.value &&  props.a6.value &&  props.a7.value &&  props.d1.value &&  props.d2.value &&  props.d3.value &&  props.d4.value &&  props.d5.value &&  props.d6.value &&  props.d7.value ? (
                props.isSubmitCohen ? (
                  <div style={{display: 'grid'}}>
                  <Typography variant="body2" color="textSecondary" gutterBottom  style={{marginBottom: 8, marginTop: 8}}>By pressing submit you indicate that all information you are about to submit are true and correct.</Typography>
                  <Button variant="contained" color="primary" size="large" disabled >Submitting..</Button>
                  </div>
                ):(
                  <div style={{display: 'grid'}}>
                  <Typography variant="body2" color="textSecondary" gutterBottom  style={{marginBottom: 8, marginTop: 8}}>By pressing submit you indicate that all information you are about to submit are true and correct.</Typography>
                  <Button variant="contained" color="primary" size="large" onClick={props.handleSubmitCohen} >Submit</Button>
                  </div>
                )
            ):(
              <div style={{display: 'grid'}}>
              <Typography variant="body2" color="textSecondary" gutterBottom style={{marginBottom: 8, marginTop: 8}}>By pressing submit you indicate that all information you are about to submit are true and correct.</Typography>
              <Button variant="outlined" disabled size="large" >Submit</Button>
              </div>
            )
          }
        </Grid>
      </Grid>
    </Container>
  );
}
