import React  from 'react';
import useIPFS from '../../hooks/useIPFS';
import styles from "../../styles/Product.module.css";

const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className={styles.button_container}>
          <a className={styles.download_button}href={file} download={filename}>Download</a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;