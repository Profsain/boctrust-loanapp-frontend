const convertFile = (e, setField) => { 
    const reader = new FileReader();
    reader.onload = () => {
        setField(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
};

export default convertFile;