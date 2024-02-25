import { FormatFile } from './FormatFile/FormatFile';
import { Spinner } from './Spinner';
import { Button } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { theme } from '../../styles/Theme';
import { useRef, useState } from 'react';
import { Section } from './Files.styled';

export const Files = ({ formatFileDownload }) => {
  const [formatFileUpload, setFormatFileUpload] = useState('none');
  const hiddenFileInput = useRef(null);

  const handleClick = e => {
    hiddenFileInput.current.click();
  };

  const handleChange = async e => {
    const dataFile = new FormData();
    const fileData = e.target.files[0];
    dataFile.append('file', fileData);
    // await get file

    //file type ui
    const fileType = fileData.name
      .substring(fileData.name.lastIndexOf('.') + 1)
      .toUpperCase();
    setFormatFileUpload(fileType);
  };

  return (
    <Section>
      <Button
        onClick={handleClick}
        htmlType="button"
        type="default"
        icon={<UploadOutlined style={{ color: `${theme.colors.black50}` }} />}
        size="large"
        style={{ marginRight: '40px' }}
        ghost={true}
      />
      <input
        type="file"
        multiple
        accept=".jpg,.jpeg,.xls,.xlsx,.doc,.docx,.html,.ppt,.pptx,.pdf"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: 'none' }}
      />

      <FormatFile name={formatFileUpload} />
      <Spinner />
      <FormatFile name={formatFileDownload} />
      <Button
        type="default"
        icon={<DownloadOutlined style={{ color: `${theme.colors.black50}` }} />}
        size="large"
        style={{ marginLeft: '40px' }}
        ghost={true}
      />
    </Section>
  );
};
