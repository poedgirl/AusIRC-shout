{{#each messages}}
<div class="msg {{type}} {{#if self}}self{{/if}}" id="msg-{{id}}">
	<span class="time">
		{{tz time}}
	</span>
	<span class="from">
		{{#if from}}
		<button class="user" style="color: #{{stringcolor from}}">{{mode}}{{from}}</button>
		{{/if}}
	</span>
	<span class="text" id="msgtext-{{id}}">
		<em class="type">{{type}}</em>
		{{#equal type "toggle"}}
			{{partial "toggle"}}
		{{else}}
			{{{parse text}}}
		{{/equal}}
	</span>
</div>
{{/each}}
