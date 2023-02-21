import React, {useState} from 'react';
import useCurTomb from '../../hooks/useCurTomb';
import useStateHook from "../../hooks/useUserState";
import axios from 'axios';

export function TombUploader(){

	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const { setCurTombArray } = useCurTomb();
	const [visible, setVisible] = useState(true);
    const { isUser } = useStateHook();

	const changeHandler = (event) => {
        const chosenfiles = Array.prototype.slice.call(event.target.files);
        setSelectedFile(chosenfiles);	
		setIsFilePicked(true);
		console.log(isUser, 'isuser')
	};
	const handleSubmission = async () => {
			
		// set form to upload to s3 and mongoDB
		const formData = new FormData();
		for (let i = 0; i < selectedFile.length; i++) {
			formData.append('files', selectedFile[i]);
			formData.append("userInfo", JSON.stringify(isUser));
		  }
		try {
			const response = await axios.post('/usertombs/addusertomb', formData);
			const myfileID = {
				file: response.data
			}
			// set curTombArray with info from axios res(including tombID)
			setCurTombArray(myfileID)
			} catch (error) {
			console.error(error);
			alert(
				'too many files uploaded, users  are restricted to 10 imgs per tomb, files must be smaller than 1mb, and files must be in .jpg or .png format, thank you for abiding by out guidelines'
			)
			}
			setVisible(false)
	 	};
	return(
        <div>
			<input name="file" onChange={changeHandler} type='file' multiple/>
			{isFilePicked ? (
				selectedFile.map((data, i) => {
					return (
						<div className={visible ? 'nada' : 'invisible'}>
							<p key = {i}>File: {i}</p>
							<p key = {i + 1}>FileName: {data.name}</p>
							<p key = {i + 2}>Filetype: {data.type}</p>
							<p key = {i + 3}>Size in bytes: {data.size}</p>
							<p key = {i + 4}>lastModifiedDate:{' '}
						{data.lastModifiedDate.toLocaleDateString()}</p>
						</div>
					)
				})
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}
