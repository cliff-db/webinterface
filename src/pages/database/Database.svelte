<script lang="typescript">
    import Icon from "svelte-awesome";
    import { faChartBar } from "@fortawesome/free-regular-svg-icons";
    import {
        faTable,
        faMountain,
        faFolderOpen,
        faGlassMartiniAlt,
        faCode,
        faEthernet,
        faHdd,
        faShieldAlt,
    } from "@fortawesome/free-solid-svg-icons";
    import { _ } from 'svelte-i18n'
    export let params: any;
</script>

<style type="text/scss">
    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 100;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        margin-left: 48px;
        margin-right: 48px;

        & > div {
            padding-top: 48px;
            padding-bottom: 48px;

            background-color: var(--theme-selection-grid-background);
            transition: all 200ms;
            cursor: pointer;

            &:hover {
                background-color: var(--theme-selection-grid-background-hover);
            }

            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;

            &:nth-child(1) {
                -webkit-order: 0;
                -ms-flex-order: 0;
                order: 0;
                -webkit-flex: 0 1 auto;
                -ms-flex: 0 1 auto;
                flex: 0 1 auto;
                -webkit-align-self: auto;
                -ms-flex-item-align: auto;
                align-self: auto;
            }

            &:nth-child(2) {
                -webkit-order: 0;
                -ms-flex-order: 0;
                order: 0;
                -webkit-flex: 0 1 auto;
                -ms-flex: 0 1 auto;
                flex: 0 1 auto;
                -webkit-align-self: auto;
                -ms-flex-item-align: auto;
                align-self: auto;
            }
        }
    }
</style>

<h1>Database Control Panel: {params.databaseName}</h1>
<div class="grid-container">
    <div>
        <Icon data={faChartBar} scale="2" />
        <span>{$_("database.diagrams")}</span>
    </div>
    <div>
        <Icon data={faTable} scale="2" />
        <span>{$_("database.tables")}</span>
    </div>
    <div>
        <Icon data={faMountain} scale="2" />
        <span>{$_("database.views")}</span>
    </div>
    <div>
        <Icon data={faFolderOpen} scale="2" />
        <span>{$_("database.external_resources")}</span>
    </div>
    <div>
        <Icon data={faGlassMartiniAlt} scale="2" />
        <span>{$_("database.synonyms")}</span>
    </div>
    <div>
        <Icon data={faCode} scale="2" />
        <span>{$_("database.programmability")}</span>
    </div>
    <div>
        <Icon data={faEthernet} scale="2" />
        <span>{$_("database.service_broker")}</span>
    </div>
    <div>
        <Icon data={faHdd} scale="2" />
        <span>{$_("database.storage")}</span>
    </div>
    <div>
        <Icon data={faShieldAlt} scale="2" />
        <span>{$_("database.security")}</span>
    </div>
</div>
