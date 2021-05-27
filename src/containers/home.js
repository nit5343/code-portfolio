import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, SideBarWrapper, Container, ContentWrap, LoadingChunks } from "../assets/styles/globalStyle";
import { Theme } from '../assets/styles/theme';
import useLocalStorage from '../components/hooks';

const TitleBar = React.lazy(() => import('../components/titlebar'));
const ActivityBar = React.lazy(() => import('../components/activitybar'));
const SideBar = React.lazy(() => import('../components/sidebar'));
const TabList = React.lazy(() => import('../components/tabs'));
const Editor = React.lazy(() => import('../components/editor'));
const NotFound = React.lazy(() => import('../components/notfound'));

const Home = (props) => {
    const [theme, setTheme] = useLocalStorage('mode');
    const mode = theme === 'dark' ? Theme.dark : Theme.light;

    const Data = props.data;
    const keys = Object.keys(Data);
    const routePaths = keys.map(path => {
        return (
            <Route path={`/${path}`} key={path}>
                <Editor data={Data} path={path}/>
            </Route>
        )
    });
    return (
        <ThemeProvider theme={mode}>
            <Router>
                <Suspense fallback={<LoadingChunks className="loading-chunks">Loading...</LoadingChunks>}>
                    <GlobalStyle />
                        <TitleBar title={props.title}/>
                    <Container>
                        <SideBarWrapper>
                            <ActivityBar 
                                socialLinks={props.socialLinks}
                                theme={theme}
                                setTheme={setTheme}
                            />
                            <SideBar data={Data} />
                        </SideBarWrapper>
                        <ContentWrap>
                            <TabList data={Data} />
                            <Switch>
                                {routePaths}
                                <Redirect exact from="/" to={keys[0]} />
                                <Route>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </ContentWrap>
                    </Container>
                </Suspense>
            </Router>
        </ThemeProvider>
    )
}

export default Home;