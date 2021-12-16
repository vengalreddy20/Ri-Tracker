import React,{useState} from 'react'

import { EditOutlined, CloseOutlined } from '@ant-design/icons'
import styles from './templetecard.module.css'

import { Modal, Button } from 'antd';

function TempleteCard(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    

    return (

        <div>

            <div className={styles.card}>
                <p>{props.name}</p>
                <div>
                    <EditOutlined className={styles.templeteIcons} />
                    <CloseOutlined className={styles.templeteIcons} onClick={showModal} />
                </div>
            </div>
            <div>
            {isModalVisible &&
                    <div>


                        <Modal
                            visible={isModalVisible}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel} >
                                    Cancel
                                </Button>,
                                <Button key="submit" type="danger" onClick={props.handleRemoveTemplete} >
                                    Delete
                                </Button>,

                            ]}
                        >
                            <h5 className='templete-heading'>Delete</h5>
                            <p>Are you sure want to delete</p>
                            
                        </Modal>
                    </div>}
            </div>
        </div>


    )
}

export default TempleteCard
