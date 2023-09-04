const convertFile = (e, setField) => { 
    const newFile = e.currentTarget.files[0];
    setField(newFile);
    console.log(newFile);
    // const reader = new FileReader();
    // reader.onload = () => {
    //     setField(reader.result);
    // };
    // reader.readAsDataURL(e.target.files[0]);
};

export default convertFile;