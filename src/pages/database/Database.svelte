<script>
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

    export let params = {};
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
        grid-template-areas:
            "diagrams tables views"
            "external-resources synonyms programmability"
            "service-broker storage security";
        margin-right: 24px;

        .diagrams {
            grid-area: diagrams;
        }
        .tables {
            grid-area: tables;
        }
        .views {
            grid-area: views;
        }
        .external-resources {
            grid-area: external-resources;
        }
        .synonyms {
            grid-area: synonyms;
        }
        .programmability {
            grid-area: programmability;
        }
        .service-broker {
            grid-area: service-broker;
        }
        .storage {
            grid-area: storage;
        }
        .security {
            grid-area: security;
        }

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
    <div class="diagrams">
        <Icon data={faChartBar} scale="2" />
        <span>Diagrams</span>
    </div>
    <div class="tables">
        <Icon data={faTable} scale="2" />
        <span>Tables</span>
    </div>
    <div class="views">
        <Icon data={faMountain} scale="2" />
        <span>Views</span>
    </div>
    <div class="external-resources">
        <Icon data={faFolderOpen} scale="2" />
        <span>External Resources</span>
    </div>
    <div class="synonyms">
        <Icon data={faGlassMartiniAlt} scale="2" />
        <span>Synonyms</span>
    </div>
    <div class="programmability">
        <Icon data={faCode} scale="2" />
        <span>Programmability</span>
    </div>
    <div class="service-broker">
        <Icon data={faEthernet} scale="2" />
        <span>Service Broker</span>
    </div>
    <div class="storage">
        <Icon data={faHdd} scale="2" />
        <span>Storage</span>
    </div>
    <div class="security">
        <Icon data={faShieldAlt} scale="2" />
        <span>Security</span>
    </div>
</div>
