import React, {useState, useEffect, useContext} from 'react'
import styles from '../styles/Resources.module.scss';
import ResourceLink from "../components/ResourceLink";
import ResourceDownload from "../components/ResourceDownload";
import { UserContext } from '../contexts/UserContext';

type Resource = {
    user_id: number,
    type: "FILE" | "URL" | "TEXT",
    content: string
}

function fetchResources(userId: number) : Promise<Resource[]> {
    return new Promise((resolve) => {
        resolve([
            {
                user_id: 1,
                type: "FILE",
                content: "this is the content"
            },
            {
                user_id: 1,
                type: "URL",
                content: "https://www.w3schools.com/tags/att_a_download.asp"
            },
            {
                user_id: 1,
                type: "TEXT",
                content: "this is the content"
            },
            {
                user_id: 1,
                type: "URL",
                content: "this is the content"
            }
        ]);
    });
}

export const Resources : React.FC= () => {
    const [resources, setResources] = useState<Resource[] | null>(null);
    const { user : { id },  } = useContext(UserContext);


    useEffect(() => {
        const resourceRequest = id !== undefined ? fetchResources(id) : fetchResources();
    }, []);

    if(resources === null) return null;

    return (
        <section className={styles.resources}>
            <h1>Your Resources</h1>
            <ResourceLink></ResourceLink>
            <ResourceDownload></ResourceDownload>

        </section>
    );
}