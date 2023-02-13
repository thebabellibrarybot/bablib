import React, {useState} from 'react';
import useCurTomb from '../../hooks/useCurTomb';
import useStateHook from "../../hooks/useUserState";

export function TombUploader(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const { curTombArray, setCurTombArray } = useCurTomb();
    const { isUser } = useStateHook();

	console.log(isUser, 'from edit tomb for user')

	const changeHandler = (event) => {
		//setSelectedFile(event.target.files);
        //console.log(selectedFile, 'file selected')
		//setIsFilePicked(true);
        const chosenfiles = Array.prototype.slice.call(event.target.files);
        setSelectedFile(chosenfiles)
		setIsFilePicked(true)
        console.log(chosenfiles, 'chosen files')
	};

	const handleSubmission = () => {
		setCurTombArray(selectedFile);
		console.log(curTombArray, 'new curtomb array', selectedFile, 'and selected file');
		console.log(isUser, 'userstate')
		const myFiles = { 
			file: selectedFile,
			userinfo: isUser }
		//axios.post myfiles
		console.log(myFiles, 'fired from handleSubmission')
		 };

		// post file meta-data to the api as well, use userState to find users bucket ect
		// add custom api to post file // return s3 bucket strings and upload s3 bucket string to global_CurTombArray
	

	return(
        <div>
			<input name="file" onChange={changeHandler} type='file' multiple/>
			{isFilePicked ? (
				selectedFile.map((data, i) => {
					console.log(data, 'data')
					return (
						<div>
							<p>File: {i}</p>
							<p>FileName: {data.name}</p>
							<p>Filetype: {data.type}</p>
							<p>Size in bytes: {data.size}</p>
							<p>lastModifiedDate:{' '}
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
