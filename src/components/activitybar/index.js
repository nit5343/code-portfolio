import React from 'react';
import { motion } from "framer-motion";
import { Wrapper, Link, Mode, List, Item } from './style';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg';
import { ReactComponent as Github } from '../../assets/svg/github.svg';
import { ReactComponent as Resume } from '../../assets/svg/resume.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';

const ActivityBar = (props) => {
    const { socialLinks, theme, setTheme } = props;

    const setMode = () => {
        const mode = theme === 'dark' ? 'light' : 'dark';
        setTheme(mode);
    }

    return (
        <Wrapper>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={List}
            >
                <Link title="Resume" variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.resume} target="_blank">
                    <Resume />
                </Link>
                <Link title="Linkedin" variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.linkedin} target="_blank">
                    <Linkedin />
                </Link>
                <Link title="Twitter" variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.twitter} target="_blank">
                    <Twitter />
                </Link>
                <Link title="Github" variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.github} target="_blank">
                    <Github />
                </Link>
            </motion.ul>

            <Mode whileHover={{ scale: 1.2 }} title="Change Theme">
                <Moon onClick={setMode}/>
            </Mode>
        </Wrapper>
    )
}

export default ActivityBar;