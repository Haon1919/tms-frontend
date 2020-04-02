import React, { useState, useEffect } from 'react';
import styles from '../styles/Resources.module.scss';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

type Resource = {
    user_id: number,
    type: "FILE" | "URL" | "TEXT",
    content: string,
    title: string
}

type ResourceTypeMap = {
    URL: Resource[],
    FILE: Resource[],
    TEXT: Resource[],
    ANY: Resource[]
};

//TODO: Remove once integrated with the backend
function fetchResources(): Promise<Resource[]> {
    return new Promise((resolve) => {
        resolve([
            {
                user_id: 1,
                type: "FILE",
                content: "this is the content this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content",
                title: "File Resource"
            },
            {
                user_id: 1,
                type: "URL",
                content: "https://www.w3schools.com/tags/att_a_download.asp",
                title: "Link resource"
            },
            {
                user_id: 1,
                type: "TEXT",
                content: "this is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the contentthis is the content",
                title: "Title resource"
            },
            {
                user_id: 1,
                type: "URL",
                content: "this is the content",
                title: "Another link resource"
            },
            {
                user_id: 1,
                type: "URL",
                content: "https://www.w3schools.com/tags/att_a_download.asp",
                title: "Link resource"
            },
            {
                user_id: 1,
                type: "TEXT",
                content: "this is the content",
                title: "Title resource"
            },
            {
                user_id: 1,
                type: "URL",
                content: "this is the content",
                title: "Another link resource"
            }
        ]);
    });
};

export const Resources: React.FC = () => {
    const [resources, setResources] = useState<Resource[] | null>(null);
    const [resourceTypeMap, setResourceTypeMap] = useState<ResourceTypeMap | null>(null);
    const [resourceFilterType, setResourceFilterType] = useState<"ANY" | "FILE" | "TEXT" | "URL">("ANY");
    const [filterTerm, setFilterTerm] = useState("")

    useEffect(() => {
        fetchResources().then(res => {
            setResources(res)
        });
    }, []);

    useEffect(() => {
        if (resources !== null) {
            let rtm = resources.reduce((acc: ResourceTypeMap, cur: Resource) => {
                switch (cur.type) {
                    case ("URL"):
                        acc.URL.push(cur);
                        break;
                    case ("FILE"):
                        acc.FILE.push(cur);
                        break;
                    case ("TEXT"):
                        acc.TEXT.push(cur);
                        break;
                    default:
                        throw Error(`Invalid resource type: Expected URL | TEXT | FILE | ANY but recieved ${cur.type}`);
                }
                acc.ANY.push(cur);

                return acc;
            }, {
                URL: [],
                FILE: [],
                TEXT: [],
                ANY: []
            });

            setResourceTypeMap(rtm);
        }
    }, [resources]);

    const handleFilterTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let NFT = (e.target as HTMLInputElement).value;
        if (NFT === "URL" || NFT === "TEXT" || NFT === "FILE" || NFT === "ANY") {
            setResourceFilterType(NFT);
        } else {
            throw Error(`Invalid resource type: Expected URL | TEXT | FILE | ANY but recieved ${NFT}`);
        }
    }

    const handleFilterTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(e.target.value);
    };

    const renderResourceList = () => {
        if (resourceTypeMap !== null) {
            let resourceSet = resourceTypeMap[resourceFilterType];
            resourceSet = resourceSet.filter(res => res.title.toUpperCase().includes(filterTerm.toUpperCase()));

            return resourceSet.map(resource => {
                let buttonText: string = resource.type === "URL" ? "Visit" : resource.type === "FILE" ? "Download" : "View";
                return (
                    <li className={styles.resource_container}>
                        <label className={styles.resource_item_label}>{resource.title}</label>
                        {
                            resource.type === "URL" ?
                                <a className={styles.resource_item_button} href={resource.content}>{buttonText}</a>
                                :
                                resource.type === "FILE" ?
                                    <a className={styles.resource_item_button} download href={resource.content}>{buttonText}</a>
                                    :
                                    <Link className={styles.resource_item_button} to={{
                                        pathname: "/TextResource",
                                        state: {
                                            resource: resource
                                        }
                                    }}>
                                        {buttonText}
                                    </Link>
                        }
                    </li>
                );
            });
        }
    }

    if (resources === null) return null;
    return (
        <section className={styles.resources}>
            <h1 className={styles.resource_heading}>Your Resources</h1>
            <FormControl component="fieldset">
                <FormLabel>Filter By File Type</FormLabel>
                <RadioGroup aria-label="position" name="position" value={resourceFilterType} onChange={handleFilterTypeChange} row>
                    <FormControlLabel
                        value="URL"
                        control={<Radio color="primary" />}
                        label="Url"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="FILE"
                        control={<Radio color="primary" />}
                        label="File"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="TEXT"
                        control={<Radio color="primary" />}
                        label="Text"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="ANY"
                        control={<Radio color="primary" />}
                        label="Any"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
            <TextField onChange={handleFilterTermChange} value={filterTerm} id="outlined-basic" label="Filter Term" variant="outlined" />
            <ul className={styles.resource_item_list}>
                {renderResourceList()}
            </ul>
        </section>
    );
}