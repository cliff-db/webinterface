<script>
    import Icon from "svelte-awesome";
    import { faChartBar } from "@fortawesome/free-regular-svg-icons";
    import {
        faUsers,
        faPuzzlePiece,
        faServer,
        faDatabase,
        faQuoteRight
    } from "@fortawesome/free-solid-svg-icons";
    import { link } from "svelte-spa-router";

    let sidebarGroups = [
        {
            name: "Main",
            titleVisible: false,
            contents: [
                {
                    name: "Dashboard",
                    href: "/dashboard",
                    icon: faChartBar,
                },
            ],
        },
        {
            name: "Administrative",
            titleVisible: true,
            contents: [
                {
                    name: "User Management",
                    href: "/users",
                    icon: faUsers,
                },
                {
                    name: "Plugins",
                    href: "/plugins",
                    icon: faPuzzlePiece,
                },
                {
                    name: "Server Settings",
                    href: "/server-settings",
                    icon: faServer,
                },
            ],
        },
        {
            name: "Data",
            titleVisible: false,
            contents: [
                {
                    name: "Databases",
                    href: "/database/lorem-ipsum",
                    icon: faDatabase,
                },
                {
                    name: "W.I.P. Query Editor",
                    href: "/editor",
                    icon: faQuoteRight,
                },
            ],
        },
    ];
</script>

<style type="text/scss">
    $background-color: #ecf0f1;
    $background-color-hover: darken($background-color, 4%);

    .sidebar {
        .group {
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: #2c3e50;

            .group-title {
                margin-top: 12px;
                font-size: 13pt;
                display: flex;
                padding-left: 12px;
                margin-left: 12px;
                padding-right: 12px;
                margin-right: 12px;
                font-weight: 500;
                letter-spacing: 0.007px;
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

    a {
        color: inherit; /* remove blue link color */
        text-decoration: inherit; /* remove underline */
    }
</style>

<div class="sidebar">
    {#each sidebarGroups as group}
        <div class="group">
            {#if group.titleVisible}
                <div class="group-title">
                    <span class="content">{group.name}</span>
                </div>
            {/if}
            {#each group.contents as element}
                <a href={element.href} use:link>
                    <div class="element">
                        <span class="icon">
                            <Icon data={element.icon} />
                        </span>
                        <span class="content"> {element.name} </span>
                    </div>
                </a>
            {/each}
        </div>
    {/each}
</div>
