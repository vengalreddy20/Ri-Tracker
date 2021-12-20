import React from 'react'
import { EditOutlined, CloseOutlined } from '@ant-design/icons'
import styles from "./ClientCard.module.css"

function ClientCard(props) {
    return (
        <div>
            <div>

                <div className={styles.card}>
                    <p>{props.name}</p>
                    <div>
                        <EditOutlined className={styles.templeteIcons} />
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClientCard
