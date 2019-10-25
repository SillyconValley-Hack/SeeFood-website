<script>
  import { lightsOff } from "../store.js";
</script>

<div class="lights-toggle">
  <input
    id="lights-toggle"
    type="checkbox"
    name="lights-toggle"
    class="switch"
    checked={!$lightsOff}
    on:change={() => lightsOff.update(lightsOff => !lightsOff)} />
  <label for="lights-toggle" class="text-xs">
    <span>
      I want
      <span class="label-text">{$lightsOff ? 'light' : 'darkness'}</span>
    </span>
  </label>
</div>
