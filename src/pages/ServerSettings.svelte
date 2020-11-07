<script>
    import SizeInput from "../components/SizeInput.svelte";
</script>

<style type="text/scss">
    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .settings {
        text-align: left;
        margin-left: 12pt;
    }

    .setting {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    label {
        display: inline;
    }
</style>

<div class="settings">
    <h1>Server Settings</h1>
    <h2>Memory</h2>

    <h3>Server memory options</h3>
    <div class="setting">
        <label for="min-server-memory">Minimum server memory (in MB)</label>
        <SizeInput name="min-server-memory" value={1} />
    </div>
    <div class="setting">
        <label for="max-server-memory">Maximum server memory (in MB)</label>
        <SizeInput name="max-server-memory" value={2147483647} />
    </div>

    <h3>Other memory options</h3>
    <div class="setting">
        <label for="index-creation-memory">Index creation memory</label>
        <SizeInput name="index-creation-memory" value={0} />
    </div>
    <div class="setting">
        <label for="min-memory-per-query">Minimum memory per query</label>
        <SizeInput name="min-memory-per-query" value={1024} />
    </div>

    <h2>Processors</h2>
    <h3>Enable processors</h3>
    <!-- TODO: Processor View like SSMS -->
    <!-- TODO: Max Threads -->
    <!-- (copy Processors page from SSMS) -->

    <h2>Security</h2>
    <h3>Server authentication</h3>

    <div>
        <input
            type="radio"
            id="server-authentication-mode-none"
            name="server-authentication-mode"
            value="none" />
        <label for="server-authentication-mode-none">No authentication
            requirements</label>
    </div>

    <div>
        <input
            type="radio"
            id="server-authentication-mode-password"
            name="server-authentication-mode"
            value="password" />
        <label for="server-authentication-mode-password">Password authentication</label>
    </div>
    <!-- TODO show "minimum password requirements (min-chars, special-chars, numbers, capital-letter, lower-case-letters, ...)" view if selected-->

    <div>
        <input
            type="radio"
            id="server-authentication-mode-public-key"
            name="server-authentication-mode"
            value="none" />
        <label for="server-authentication-mode-public-key">Public key required</label>
    </div>
    <!-- TODO show "minimum public key requirements (how much bits etc.)" view if selected-->

    <h3>Login auditing</h3>
    <div>
        <input
            type="radio"
            id="login-auditing-none"
            name="login-auditing"
            value="none" />
        <label for="login-auditing-none">None</label>
    </div>
    <div>
        <input
            type="radio"
            id="login-auditing-failed-logins"
            name="login-auditing"
            value="none" />
        <label for="login-auditing-failed-logins">Failed logins only</label>
    </div>
    <div>
        <input
            type="radio"
            id="login-auditing-successful-logins"
            name="login-auditing"
            value="none" />
        <label for="login-auditing-successful-logins">Successful logins only</label>
    </div>
    <div>
        <input
            type="radio"
            id="login-auditing-both"
            name="login-auditing"
            value="none" />
        <label for="login-auditing-both">Both failed and successful logins</label>
    </div>

    <h2>Connections</h2>
    <div class="setting">
        <label for="max-concurrent-connections">Maximum number of concurrent connections (0 = unlimited)</label>
        <input type="number" name="max-concurrent-connections" value={0} />
    </div>
    <div class="setting">
        <label for="query-governor">Use query governor (-1 = disabled)</label>
        <input type="number" name="query-governor" value={-1} />
    </div>
    <div>
        <input type="checkbox" name="allow-remote-connections" checked={true} />
        <label for="allow-remote-connections">Allow remote connections to this server</label>
    </div>
    <div class="setting">
        <label for="remote-query-timeout">Remote query timeout (in seconds, 0 = no timeout)</label>
        <input type="number" name="remote-query-timeout" value={600} />
    </div>

    <h3>Default connection options</h3>
    <div>
        <input type="checkbox" name="default-connection-option-implicit-transactions" />
        <label for="default-connection-option-implicit-transactions">Implicit transactions</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-cursor-close-on-commit" />
        <label for="default-connection-option-cursor-close-on-commit">Cursor close on commit</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-ansi-warnings"/>
        <label for="default-connection-option-ansi-warnings">ANSI Warnings</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-ansi-padding"/>
        <label for="default-connection-option-ansi-padding">ANSI Padding</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-ansi-null"/>
        <label for="default-connection-option-ansi-null">ANSI NULL</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-arithmetic-abort"/>
        <label for="default-connection-option-arithmetic-abort">Arithmetic abort</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-arithmetic-ignore"/>
        <label for="default-connection-option-arithmetic-ignore">Arithmetic ignore</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-quoted-identifier"/>
        <label for="default-connection-option-quoted-identifier">Quoted identifier</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-no-count"/>
        <label for="default-connection-option-no-count">No count</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-ansi-null-default-on"/>
        <label for="default-connection-option-ansi-null-default-on">ANSI NULL Default on</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-ansi-null-default-off"/>
        <label for="default-connection-option-ansi-null-default-off">ANSI NULL Default off</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-concat-null-yields-null"/>
        <label for="default-connection-option-concat-null-yields-null">concat null yields null</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-numeric-round-abort"/>
        <label for="default-connection-option-numeric-round-abort">numeric round abort</label>
    </div>
    <div>
        <input type="checkbox" name="default-connection-option-xact-abort"/>
        <label for="default-connection-option-xact-abort">xact abort</label>
    </div>

    <h2>Database Settings</h2>
    <!-- TODO -->

    <h2>Advanced</h2>
    <!-- TODO -->

    <h2>Permissions</h2>
    <!-- TODO -->
</div>
