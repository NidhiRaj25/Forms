import { useState } from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from "@mui/material/Select";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

import "./Forms.css";


const Forms = () => {
    const [questions, setQuestions] = useState(
        [{
            questionText: "Prefix",
            questionType: "radio",
            options: [
                { optionText: "Mr" },
                { optionText: "Miss" },
                { optionText: "Mrs" },
                { optionText: "Other" }
            ],
            open: true,
            required: false,
            answer: false,
            answerKey: "",
            points: 0


        }]
    )

    const changeQuestion = (text, i) => {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)

    }

    const addQuestionType = (i, type) => {
        let newQueType = [...questions]
        console.log(type)
        newQueType[i].questionType = type;
        setQuestions(newQueType);
    }

    const changeOptionValue = (text, i, j) => {
        var optionQuestion = [...questions];
        optionQuestion[i].options[j].optionText = text;
        setQuestions(optionQuestion);
        console.log(optionQuestion)

    }

    const removeOption = (i, j) => {
        var RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion)
            console.log(i + "_" + j)
        }
    }

    const addOption = (i) => {
        var optionOfQuestion = [...questions]
        if (optionOfQuestion[i].options.length < 5) {
            optionOfQuestion[i].options.push({ optionText: "option" + (optionOfQuestion[i].options.length + 1) })
        } else {
            console.log("max 5 option");
        }
        setQuestions(optionOfQuestion)
    }

    const copyQuestion = (i) => {
        expandcloseAll();
        let newQueType = [...questions]
        var newQuestion = { ...newQueType[i] };

        setQuestions([...questions, newQuestion])
    }

    const deleteQuestion = (i) => {
        let newQueType = [...questions];
        if (questions.length > 1) {
            newQueType.splice(i, 1);

            setQuestions(newQueType)
        }
    }

  
    const addMoreQuestionField = () => {
        expandcloseAll();
        setQuestions([...questions,
        { questionText: "Question", questionType: "radio", options: [{ optionText: "option 1" }], open: true, required: false }]);
    }

    const expandcloseAll = () => {
        let newQueType = [...questions];
        for (let j = 0; j < newQueType.length; j++) {
            newQueType[j].open = false;
        }
        setQuestions(newQueType);
    }

    const handleExpand = (i) => {
        let newQueType = [...questions];
        for (let j = 0; j < newQueType.length; j++)
            if (i === j) {
                newQueType[i].open = true;

            } else {
                newQueType[j].open = false;
            }
        setQuestions(newQueType);
    }

    const SetAnswer = (ans, questionNo) => {
        var Questions = [...questions];

        Questions[questionNo].answerKey = ans;

        setQuestions(Questions)
        console.log(questionNo + " " + ans)

    }

    const setOptionPoints = (points, questionNo) => {
        var Questions = [...questions];

        Questions[questionNo].points = points;

        setQuestions(Questions)
        console.log(questionNo + " " + points)
    }

    const doneAnswer = (i) => {
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
    }

    const addAnswer=(i)=>{
        var answerOfQuestion=[...questions];
        answerOfQuestion[i].answer=!answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion);
    }

    const questionsUI = () => {
        return questions.map((ques, i) => (
            <Accordion expanded={questions[i].open} onChange={() => { handleExpand(i) }} className={questions[i].open ? 'add_border' : " "} >

                <AccordionSummary
                    aria-controls='panel1a-content'
                    id="panel1a-header"
                    elevation={1}
                    style={{ width: "100%" }}>


                    { !questions[i].open ? (

                            <div className='saved_question'>
                                <Typography className='text1'>{i + 1}.{questions[i].questionText}</Typography>

                                {ques.options.map((op, j) => (

                                    <div key={j} >
                                        <div style={{ display: "flex" }}>
                                            <FormControlLabel
                                                className='formControl'
                                                disabled control={<input
                                                    type={ques.questionType}
                                                    color='primary'
                                                    style={{ marginRight: "3px" }}
                                                    required={ques.type} />}
                                                label={<Typography className='text2'>{ques.options[j].optionText}</Typography>}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                    ) : ""} 
                    

                </AccordionSummary>
{/* condition */}
               

                    <div className='questions_boxes'>

{/* condition end */}
                        {!questions[i].answer ? (
                            <AccordionDetails className='add_question'>
                                <div className='add_question_top'>
                                    <input type='text' className='question' placeholder='Question' value={ques.questionText} onChange={(e) => { changeQuestion(e.target.value, i) }}></input>
                                    <CropOriginalIcon style={{ color: "#5f6368" }} />
                                    <Select className='select'>
                                        <MenuItem className="menuitem" id='text' value="Text" onClick={() => { addQuestionType(i, "text") }}><SubjectIcon style={{ marginRight: "10px" }} /> Paragraph</MenuItem>
                                        <MenuItem className="menuitem" id='checkbox' value="Checkbox" onClick={() => { addQuestionType(i, "checkbox") }}><CheckBoxIcon style={{ marginRight: "10px" }} checked />Checkboxes</MenuItem>
                                        <MenuItem className="menuitem" id='radio' value="Radio" onClick={() => { addQuestionType(i, "radio") }}><RadioButtonCheckedIcon style={{ marginRight: "10px" }} checked />Multiple Choice</MenuItem>
                                    </Select>
                                </div>

                                {ques.options.map((op, j) => (
                                        <div className='question_body' key={j}>
{/* condition end */}
                                            {
                                                    (ques.questionType !== "text") ?
                                                    <input type={ques.questionType} style={{ marginRight: "10px" }}></input> :
                                                    <ShortTextIcon style={{ marginRight: "10px" }} />
                                            }

                                            <div>
                                                <input type='text' className='text_input' placeholder='option' value={ques.options[j].optionText} onChange={(e) => { changeOptionValue(e.target.value, i, j) }}></input>
                                            </div>

                                            {/* <CropOriginalIcon className=" cropItem" style={{ color: "#5f6368" }} /> */}
                                            <IconButton aria-label='delete'><CloseIcon onClick={() => { removeOption(i, j) }} /></IconButton>

                                        </div>
                                    ))
                                }

{/* condition end */}
                                { ques.options.length < 5 ? (

                                        <div className='option_body'>
                                            <FormControlLabel disabled control={
// {/* condition */} end
                                                (ques.questionType !== "text") ?
                                                    <input
                                                        type={ques.questionType}
                                                        color="primary"
                                                        inputprops={{ "aria-label": 'secondary checkbox' }}
                                                        style={{ marginRight: "10px", marginLeft: "16px" }}
                                                    ></input> :
                                                    <ShortTextIcon />
                                            }
                                                label={
                                                    <div >
                                                        <input type='text' className='text_input' style={{ fontSize: "13px", width: "60px" }} placeholder="Add other"></input>
                                                        <Button className="addOptionButton" size="small" onClick={() => { addOption(i) }} >Add Option</Button>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    ) : ""
                                } 

                                <div className='footer'>
                                    <div className='question_bottom_left'>
                                        <Button className='Answer' onClick={()=>{addAnswer(i)}}>Answer Key</Button>
                                    </div>
                                </div>
                            </AccordionDetails>) : (

                            <AccordionDetails className='add_question'>
                                <div className='top_header'>Choose correct Answer</div>
                                <div className='add_question_top'>
                                    <input type='text' className='question' placeholder='Question' value={ques.questionText} disabled />
                                    <input type='number' className='points' min="0" step="1" placeholder='0' onChange={(e) => { setOptionPoints(e.target.value, i) }} />
                                </div>
                                {
                                    ques.options.map((op, j) => (
                                        <div className='add_question_body' key={j} style={{ marginLeft: "8px", marginBottom: "10px", marginTop: "5px" }}>
                                            <div key={j}>
                                                <div style={{ display: "flex" }} className=''>
                                                    <div className='form-check'>
                                                        <label
                                                            style={{ fontSize: "13px" }} onClick={() => { SetAnswer(ques.options[j].optionText, i) }}>
                                                            {(ques.questionType !== "text") ?
                                                                <input
                                                                    type={ques.questionType}
                                                                    name={ques.questionText}
                                                                    value="option3"
                                                                    className='form-check-input'
                                                                    required={ques.required}
                                                                    style={{ marginRight: "10px", marginBottom: "10px", marginTop: "5px" }}
                                                                /> : <ShortTextIcon style={{ marginRight: "10px " }} />
                                                            }
                                                            {ques.options[j].optionText}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className='add_question_body'>
                                    <Button size='small' className='button1'>Add Answer Feedback</Button>
                                </div>
                                <div className='add_question_bottom'>
                                    <Button className='button2' variant='outlined' onClick={() => { doneAnswer(i) }}>Done</Button>
                                </div>
                            </AccordionDetails>
                        )}


    {!ques.answer ? (

                        
                        <div className='edit'>
                            <AddCircleOutlineIcon onClick={addMoreQuestionField} className='icon_edit' />
                            <ContentCopyIcon className='icon_edit' onClick={() => { copyQuestion(i) }} />
                            <DeleteIcon className='icon_edit' onClick={() => { deleteQuestion(i) }}  style={{fontSize:30 }}/>
                           
                        </div>):" "}
                    </div>

            </Accordion>
        ))
    }
    
    return (
        <div>
            <div className='forms'>
                <br></br>
                <div className='section'>
                    <div className='title'>
                        <div className='forms_top'>
                            <input type='text' className='forms_name' style={{ color: "black" }} placeholder='Untitled Document'></input>
                            <input type='text' className='forms_description' style={{ color: "black" }} placeholder='Form Description'></input>
                        </div>
                    </div>
                    {questionsUI()}
                </div>
            </div>
        </div>
    )
}

export default Forms
