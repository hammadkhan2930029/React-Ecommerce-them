import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiSlider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import './categoryDrawer.css';


function valuetext(value) {
    return `$${value}`;
}

export default function CategoryDrawer({ open, onClose }) {
    const [ expandedAccordians,setExpandedAccordians]=useState({
           category:true,
           brand:true,
           rating:true,
           colors:true,
           price:true
       })
       const toggleAccordian = (key)=>{
           setExpandedAccordians(prev => ({
               ...prev,
               [key]:!prev[key]
           }))
       }
    const [value1, setValue1] = useState(2);
    const [value, setValue] = useState([0, 1500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Drawer open={open} onClose={onClose}>
                    <div className="side_bar_category_drawer">

                        {/* Category */}
                        <Accordion expanded={expandedAccordians.category} onChange={() => toggleAccordian('category')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="category_name_drawer">Category</span>
                            </AccordionSummary>
                            <div className="checkBox_div_drawer">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>
                        </Accordion>

                        {/* Brand */}
                        <Accordion expanded={expandedAccordians.brand} onChange={() => toggleAccordian('brand')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="category_name_drawer">Brand</span>
                            </AccordionSummary>
                            <div className="checkBox_div_drawer">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>
                        </Accordion>

                        {/* Colors */}
                        <Accordion expanded={expandedAccordians.colors} onChange={() => toggleAccordian('colors')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="category_name_drawer">Colors</span>
                            </AccordionSummary>
                            <div className="checkBox_div_drawer">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Required" />
                                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                                </FormGroup>
                            </div>
                        </Accordion>

                        {/* Rating */}
                        <Accordion expanded={expandedAccordians.rating} onChange={() => toggleAccordian('rating')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="category_name_drawer">Rating</span>
                            </AccordionSummary>
                            <div className="priceRange_div_drawer">
                                <Rating
                                    name="simple-controlled"
                                    value={value1}
                                    onChange={(event, newValue) => {
                                        setValue1(newValue);
                                    }}
                                />
                            </div>
                        </Accordion>

                        {/* Price */}
                        <Accordion expanded={expandedAccordians.price} onChange={() => toggleAccordian('price')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="category_name_drawer">Price</span>
                            </AccordionSummary>
                            <div className="priceRange_div_drawer">
                                <MuiSlider
                                    getAriaLabel={() => 'Price range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1500}
                                    getAriaValueText={valuetext}
                                    sx={{ color: '#c10037' }}
                                />
                            </div>
                        </Accordion>
                    </div>

            </Drawer>
        </div>
    );
}
