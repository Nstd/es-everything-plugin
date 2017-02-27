'use strict';
const React = require('react');
import { search } from 'cerebro-tools'
const Preview = require('preview');
const Settings = require('settings');
const id = 'esevplugin';

const fn = ({
    term,
    display,
    update,
    config,
    actions
}) => {
    console.log('1:'+config.get('esevdir'));
    //console.log('2:'+config.set('esevdir','teste'));
    //console.log('3:'+config.get('esevdir'));
    const found = search(["settings"], term).length > 0
    if(found){
        display({
            id: 'eseverythingpluginsettings',
            //icon,
            order: 1,
            title: `Search Everything Settings`,
            getPreview: () => < Settings config= {config} />
        });
    }

    display({
        id: 'eseverythingplugin',
        //icon,
        order: 11,
        title: `Search Everything for ${term}`,
        getPreview: () => < Preview term = {
            term
        }
        />
    });
};


module.exports = {
    fn,
    keyword: 'ev',
    name: 'Search Everything'
}
