<script>
    import SizeInput from '../components/SizeInput.svelte';
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
</style>

<div class="settings">
    <SizeInput></SizeInput>
    <h1>Server Settings</h1>
    <h2>Memory</h2>

    <h3>Server memory options</h3>
    <div class="setting">
        <label for="min-server-memory">Minimum server memory (in MB)</label>
        <input type="text" name="min-server-memory" value="{1}" />
    </div>
    <div class="setting">
        <label for="max-server-memory">Maximum server memory (in MB)</label>
        <input type="text" name="max-server-memory" value="{2147483647}" />
        <SizeInput/>
    </div>

    <h3>Other memory options</h3>
    <div class="setting">
        <label for="index-creation-memory">Index creation memory (in KB, 0 =
            dynamic memory)</label>
        <input type="text" name="index-creation-memory" value="{0}" />
    </div>
    <div class="setting">
        <label for="min-memory-per-query">Minimum memory per query (in KB)</label>
        <input type="text" name="min-memory-per-query" value="{1024}" />
    </div>

    <h2>Processors</h2>
    <h3>Enable processors</h3>
    <!-- TODO: Processor View like SSMS -->
    <!-- TODO: Max Threads -->
    <!-- (copy Processors page from SSMS) -->

    <h2>Security</h2>
    <h3>Server authentication</h3>

    <input
        type="radio"
        id="server-authentication-mode-none"
        name="server-authentication-mode"
        value="none" />
    <label for="server-authentication-mode-none">No authentication requirements</label>

    <input
        type="radio"
        id="server-authentication-mode-password"
        name="server-authentication-mode"
        value="password" />
    <label for="server-authentication-mode-password">Password authentication</label>
    <!-- TODO show "minimum password requirements (min-chars, special-chars, numbers, capital-letter, lower-case-letters, ...)" view if selected-->

    <input type="radio" id="server-authentication-mode-public key" name="server-authentication-mode" value="none">
    <label for="server-authentication-mode-public-key">Public key required</label>
    <!-- TODO show "minimum public key requirements (how much bits etc.)" view if selected-->

    <h3>Login auditing</h3>
    <!-- TODO -->

    <h2>Connections</h2>
    <!-- TODO -->

    <h2>Database Settings</h2>
    <!-- TODO -->

    <h2>Advanced</h2>
    <!-- TODO -->

    <h2>Permissions</h2>
    <!-- TODO -->
</div>
