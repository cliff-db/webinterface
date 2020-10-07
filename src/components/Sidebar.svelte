
<script>
    import Icon from 'svelte-awesome';
    import { faChartBar } from '@fortawesome/free-regular-svg-icons';
    import { faUsers, faPuzzlePiece, faCog, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="sidebar">
    <div class="element">
        <span class="icon">
            <Icon data={faChartBar}/>
        </span>
        <span class="content">
            Dashboard
        </span>
    </div>
    <div class="group">
        <div class="group-title">
            <span class="content">Administrative</div>
        <div class="element">
            <span class="icon">
                <Icon data={faUsers}/>
            </span>
            <span class="content">
                User Management
            </span>
        </div>
        <div class="element">
            <span class="icon">
                <Icon data={faPuzzlePiece}/>
            </span>
            <span class="content">
                Plugins
            </span>
        </div>
        <div class="element">
            <span class="icon">
                <Icon data={faServer}/>
            </span>
            <span class="content">
                Server Settings
            </span>
        </div>
    </div>
    <div class="element">
        <span class="icon">
            <Icon data={faDatabase}/>
        </span>
        <span class="content">
            Databases
        </span>
    </div>
</div>

<style type="text/scss">
    $background-color: #ecf0f1;
    $background-color-hover: darken($background-color, 4%);

    .sidebar {
        .group {
            margin-top: 12px;
            
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-top-style: solid;
            border-bottom-style: solid;
            border-top-color: #2c3e50;
            border-bottom-color: #2c3e50;

            .group-title {
                font-size: 13pt;
                display: flex;
                padding-left: 12px;
                margin-left: 12px;
                padding-right: 12px;
                margin-right: 12px;
                font-weight: 500;
                letter-spacing: .007px;
                text-transform: uppercase;

                color: darken($background-color, 90%);
                margin-left: 8px;
            }
        }

        .element {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 24px;
            padding-right: 24px;
            font-weight: 600;
            transition: all 200ms;
            cursor: pointer;
            background-color: $background-color;
            display: flex;

            .icon {
                display: inline;
            }

            .content {
                margin-left: 8px;
            }

            &:hover {
                background-color: $background-color-hover;
            }
        }
    }
</style>
