import React, { useState, useRef } from 'react';
import {
  ConversionWrapper,
  ConversionButton,
  HiddenInput,
  UploadButton,
  PDFWrapper,
  PDFText,
} from './Conversion.styled';
import uploadSVG from '../Images/upload.svg';
import Lottie from 'react-lottie';
import animationData from '../../animation.json';

const Conversion = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const hiddenInputRef = useRef(null);

  const handleFileChange = event => {
    const uploadedFiles = event.target.files;

    const extensions = new Set();
    for (let i = 0; i < uploadedFiles.length; i++) {
      const fileExtension = uploadedFiles[i].name.split('.').pop();
      extensions.add(fileExtension);
    }

    if (extensions.size > 1) {
      alert('all uploaded files must have the same extension!');
      return;
    }
    setIsProcessing(true);
    handleConvertClick(uploadedFiles);
  };

  const handleConvertClick = async uploadedFiles => {
    try {
      const formData = new FormData();

      for (let i = 0; i < uploadedFiles.length; i++) {
        formData.append('file', uploadedFiles[i]);
      }

      const response = await fetch('URL', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Files were successfully sent to the server:', data);
      } else {
        console.error('Error sending files to server:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending files to server:', error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadClick = async () => {
    try {
      const response = await fetch('URL');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'обработанные_файлы.zip';
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        link.remove();
      } else {
        console.error(
          'Error when downloading processed files:',
          response.statusText
        );
      }
    } catch (error) {
      console.error('Error when downloading processed files:', error.message);
    }
  };

  const handleChooseFilesClick = () => {
    hiddenInputRef.current.click();
  };

  const defaultOptions = {
    loop: true,
    autoplay: isProcessing,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <ConversionWrapper>
      <HiddenInput
        type="file"
        accept=".jpg,.jpeg,.xls,.xlsx,.doc,.docx,.html,.ppt,.pptx"
        onChange={handleFileChange}
        multiple
        ref={hiddenInputRef}
      />
      <UploadButton onClick={handleChooseFilesClick}>
        <img src={uploadSVG} alt="Upload" />
      </UploadButton>
      <PDFWrapper>
        <PDFText>PDF</PDFText>
      </PDFWrapper>
      <Lottie options={defaultOptions} height={21} width={86} />
      <PDFWrapper>
        <PDFText>PDF</PDFText>
      </PDFWrapper>
      <ConversionButton onClick={handleDownloadClick}>Скачать</ConversionButton>
    </ConversionWrapper>
  );
};

export default Conversion;
