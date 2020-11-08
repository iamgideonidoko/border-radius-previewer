/*>>>>>>WITTEN BY IFEX<<<<<<*/

//TO GET ALL THE UNIT SELECTORS
const tlSet1 = document.querySelector('.top-left-set1 .unit-select');
const tlSet2 = document.querySelector('.top-left-set2 .unit-select');
const trSet1 = document.querySelector('.top-right-set1 .unit-select');
const trSet2 = document.querySelector('.top-right-set2 .unit-select');
const brSet1 = document.querySelector('.bottom-right-set1 .unit-select');
const brSet2 = document.querySelector('.bottom-right-set2 .unit-select');
const blSet1 = document.querySelector('.bottom-left-set1 .unit-select');
const blSet2 = document.querySelector('.bottom-left-set2 .unit-select');

//TO GET THE PREVIEW BOX
const previewBox = document.querySelector('.br-preview-box');

//TO GET THE HOLDER FOR THE FINAL RESULT
const resultToPreview = document.querySelector('.result-to-preview');
const outputToDisplay = document.querySelector('.output-to-display');

//TO GET ALL THE SLIDERS
const rsbSlider = document.querySelector('#rsb-slider');
const rsbsliderText = document.querySelector('.rsb-slider-text');

const widthSlider = document.querySelector('#bpb-width');
const heightSlider = document.querySelector('#bpb-height');
const widthSliderText = document.querySelector('.bpb-width-text');
const heightSliderText = document.querySelector('.bpb-height-text');

//to get all the css output values
const tls1Val = document.querySelector('.tl1-val');
const tls2Val = document.querySelector('.tl2-val');
const trs1Val = document.querySelector('.tr1-val');
const trs2Val = document.querySelector('.tr2-val');
const brs1Val = document.querySelector('.br1-val');
const brs2val = document.querySelector('.br2-val');
const bls1Val = document.querySelector('.bl1-val');
const bls2Val = document.querySelector('.bl2-val');

// to get all the cs output values unit
const tls1Unit = document.querySelector('.tl1-unit');
const tls2Unit = document.querySelector('.tl2-unit');
const trs1Unit = document.querySelector('.tr1-unit');
const trs2Unit = document.querySelector('.tr2-unit');
const brs1Unit = document.querySelector('.br1-unit');
const brs2Unit = document.querySelector('.br2-unit');
const bls1Unit = document.querySelector('.bl1-unit');
const bls2Unit = document.querySelector('.bl2-unit');

//GET STUFF FOR COPY PART
const copyBtn = document.querySelector('.copy-btn');
const outputToDisplayParent = document.querySelector('.output-to-display-parent');
const copyInput = document.querySelector('.copy-input');

//create an array of all the unit selectors
let setArray = [tlSet1, tlSet2, trSet1, trSet2, brSet1, brSet2, blSet1, blSet2];

//DEFAULT SETTINGS
previewBox.style.width = "300px";
previewBox.style.minWidth = "300px";
previewBox.style.height = "150px";
rsbSlider.value = "0";
widthSlider.value = "300";
heightSlider.value = "150";
widthSliderText.value = "300px";
heightSliderText.value = "150px";
rsbsliderText.value = "0px";
tlSet1.value = "px";
tlSet2.value = "px";
trSet1.value = "px";
trSet2.value = "px";
brSet1.value = "px";
brSet2.value = "px";
blSet1.value = "px";
blSet2.value = "px";
previewBox.style.borderRadius = "0px";
outputToDisplay.innerText = previewBox.style.borderRadius;

//loop through all the unit selector in the setArray
setArray.forEach(setElem => {
    //When any of the unit select is clicked
    setElem.onclick = function (e) {
        switch (e.target) {
            case tlSet1:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 0) {
                        rsbSlider.value = tls1Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                            rsbsliderText.value = tls1Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = tls1Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case tlSet2:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 1) {
                        rsbSlider.value = tls2Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                            rsbsliderText.value = tls1Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = tls1Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case trSet1:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 2) {
                        rsbSlider.value = trs1Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                            rsbsliderText.value = trs1Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = trs1Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case trSet2:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 3) {
                        rsbSlider.value = trs2Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                            rsbsliderText.value = trs2Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = trs2Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case brSet1:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 4) {
                        rsbSlider.value = brs1Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                            rsbsliderText.value = brs1Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = brs1Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case brSet2:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 5) {
                        rsbSlider.value = brs2val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                            rsbsliderText.value = brs2val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = brs2val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case blSet1:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 6) {
                        rsbSlider.value = bls1Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                            rsbsliderText.value = bls1Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = bls1Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;
            case blSet2:
                for (let i = 0; i < setArray.length; i++) {
                    if (i == 7) {
                        rsbSlider.value = bls2Val.innerText;
                        if (e.target.value == "px") {
                            rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                            rsbsliderText.value = bls2Val.innerText + 'px';
                        } else if (e.target.value = "%") {
                            rsbSlider.max = "100";
                            rsbsliderText.value = bls2Val.innerText + '%';
                        }
                        continue;
                    }
                    setArray[i].classList.remove('current-unit-select');
                }
                break;

        }
        setElem.classList.add('current-unit-select');
        previewBox.style.borderRadius = `${resultToPreview.innerText}`;
        outputToDisplay.innerText = previewBox.style.borderRadius;
    }

    //WHEN THE VALUE OF ANY UNIT SELECTOR IS CHANGED

    setElem.onchange = function (e) {
        switch (e.target) {
            case tlSet1:
                tls1Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                    rsbsliderText.value = rsbSlider.value + tls1Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + tls1Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + tls1Unit.innerText;
                    }
                }
                break;
            case tlSet2:
                tls2Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                    rsbsliderText.value = rsbSlider.value + tls2Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + tls2Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + tls2Unit.innerText;
                    }
                }
                break;
            case trSet1:
                trs1Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                    rsbsliderText.value = rsbSlider.value + trs1Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + trs1Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + trs1Unit.innerText;
                    }
                }
                break;
            case trSet2:
                trs2Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                    rsbsliderText.value = rsbSlider.value + trs2Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + trs2Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + trs2Unit.innerText;
                    }
                }
                break;
            case brSet1:
                brs1Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                    rsbsliderText.value = rsbSlider.value + brs1Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + brs1Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + brs1Unit.innerText;
                    }
                }
                break;
            case brSet2:
                brs2Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                    rsbsliderText.value = rsbSlider.value + brs2Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + brs2Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + brs2Unit.innerText;
                    }
                }
                break;
            case blSet1:
                bls1Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.minWidth)}`;
                    rsbsliderText.value = rsbSlider.value + bls1Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + bls1Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + bls1Unit.innerText;
                    }
                }
                break;
            case blSet2:
                bls2Unit.innerText = e.target.value;
                if (e.target.value == "px") {
                    rsbSlider.max = `${parseInt(previewBox.style.height)}`;
                    rsbsliderText.value = rsbSlider.value + bls2Unit.innerText;
                } else if (e.target.value = "%") {
                    rsbSlider.max = "100";
                    if (parseInt(rsbSlider.value) > 100) {
                        rsbsliderText.value = '100' + bls2Unit.innerText;
                    } else {
                        rsbsliderText.value = rsbSlider.value + bls2Unit.innerText;
                    }
                }
                break;
        }

        previewBox.style.borderRadius = `${resultToPreview.innerText}`;
        outputToDisplay.innerText = previewBox.style.borderRadius;

    }


});



//WHEN THE SLIDER IS ALTERED
rsbSlider.oninput = function () {
    setArray.forEach(setElem => {
        if (setElem.classList.contains('current-unit-select')) {
            switch (setElem) {
                case tlSet1:
                    tls1Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + tls1Unit.innerText;
                    break;
                case tlSet2:
                    tls2Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + tls2Unit.innerText;
                    break;
                case trSet1:
                    trs1Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + trs1Unit.innerText;
                    break;
                case trSet2:
                    trs2Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + trs2Unit.innerText;
                    break;
                case brSet1:
                    brs1Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + brs1Unit.innerText;
                    break;
                case brSet2:
                    brs2val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + brs2Unit.innerText;
                    break;
                case blSet1:
                    bls1Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + bls1Unit.innerText;
                    break;
                case blSet2:
                    bls2Val.innerText = rsbSlider.value;
                    rsbsliderText.value = rsbSlider.value + bls2Unit.innerText;
                    break;
            }
        }
    });

    previewBox.style.borderRadius = `${resultToPreview.innerText}`;
    outputToDisplay.innerText = previewBox.style.borderRadius;

}

//WHEN THE WIDTH AND HEIGHT RANGE IS ALTERED
widthSlider.oninput = function () {
    previewBox.style.width = widthSlider.value + 'px';
    previewBox.style.minWidth = widthSlider.value + 'px';
    widthSliderText.value = widthSlider.value + 'px';
}

heightSlider.oninput = function () {
    previewBox.style.height = heightSlider.value + 'px';
    heightSliderText.value = heightSlider.value + 'px';
}




//WHEN THE COPY BUTTON IS CLICKED
copyBtn.onclick = function (e) {
    //get the text to be copied
    copyInput.value = outputToDisplayParent.innerText;
    
    
    //alert the copied text
    window.prompt("Copy & press Enter", copyInput.value);
    
}

