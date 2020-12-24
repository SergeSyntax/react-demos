import React, { Fragment, useState } from 'react';
import ProjectNavbar from './ProjectNavbar';
import ProjectList from './ProjectList';
import ProjectHeader from './ProjectHeader';
import { Route, Switch } from 'react-router-dom';
import ProjectDelete from './ProjectDelete';
import { GoSearch, GoX } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';

const Projects = () => {
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const [searchBarValue, setSearchValue] = useState('');
  return (
    <Fragment>
      <div className="flex flex-col flex-1 flex-grow border-r border-l h-screen overflow-hidden">
        <ProjectHeader />
        <div className="border-b px-4 flex py-3">
          <form className="relative flex-1 rounded-full text-lg">
            <GoSearch
              className={`absolute mt-3 ml-4 text-2xl  ${
                searchBarFocus ? 'text-blue-500' : 'text-gray-600'
              } `}
            />
            {searchBarValue && (
              <GoX
                className={`${
                  searchBarFocus ? 'text-blue-500' : 'text-transparent'
                } absolute right-0 mt-3 mr-3  rounded-full fon text-2xl`}
                onClick={() => setSearchValue('')}
              />
            )}
            <input
              onFocus={() => setSearchBarFocus(true)}
              onBlur={() => setSearchBarFocus(false)}
              onChange={e => setSearchValue(e.target.value)}
              value={searchBarValue}
              title="Search Project"
              placeholder="Search Project"
              type="text"
              className="w-full pl-16 py-2 rounded-full bg-transparent bg-gray-200 focus:bg-white outline-none border focus:border-blue-500"
            />
          </form>
          <button
            className="ml-4 rounded-full text-3xl text-blue-500 p-2 hover:bg-blue-100 focus:outline-none focus:shadow-outline"
            title="Search Settings"
          >
            <FiSettings />
          </button>
        </div>
        <ProjectNavbar />
        <ProjectList />
        <Switch>
          <Route
            exact
            path="/dashboard/projects/delete/:id"
            component={ProjectDelete}
          />
        </Switch>
      </div>
      <div className="flex-1 flex-shrink">
        {/* <section className="bg-gray-100 rounded-lg p-16 mt-8 mr-auto w-6/12 ml-12">
          <input type="text" name="" id="" />
          <button>Create Project</button>
        </section>
        <section className="bg-gray-100 rounded-lg p-16 mt-8 mr-auto w-6/12 ml-12">
          section2
        </section> */}
      </div>
    </Fragment>
  );
};

export default Projects;
