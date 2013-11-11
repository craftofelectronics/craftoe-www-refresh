module Jekyll

  class ShowHideBlock < Liquid::Block
    @div_name = nil
    @message = nil
    @tagbody = nil
    
    def initialize(tag_name, markup, tokens)
      
      if markup =~ /([\-a-z0-9]+).*/
        @div_name = String($1).strip
      end
      
      if markup =~ /[a-z0-9\-\_]+\s*(.*)/
        @message = $1.strip
      end
      
      @tagbody = tokens
      
      # puts "TAG"
      # puts tag_name
      # puts "DIV"
      # puts @div_name
      # puts "MESSAGE"
      # puts @message
      # puts "TAGBODY"
      # puts @tagbody
      # puts "END TAGBODY"
      
      super
    end

    def render(context)
      output = super
      code = super
      
      show = Jekyll.configuration({})['show']
      hide = Jekyll.configuration({})['hide']
      
      result = <<-EOF
<p>
<a href="#" id="#{@div_name}-show" class="showLink" onclick="showHide('#{@div_name}');return false;"> #{show} Show #{@message}.</a>
</p>
<div id="#{@div_name}" class="more">
EOF

# puts "RENDERING"
# puts code.split(/\n/)
# puts "DONE"

for line in code.split(/\n/)
  result += "<p>" + line + "</p>"
end

result += <<-EOF
<p><a href="#" id="#{@div_name}-hide" class="hideLink" onclick="showHide('#{@div_name}');return false;">
#{hide} Hide #{@message}. </a></p>
</div>
EOF
      # puts result      
      
      result
    end
  end
end

Liquid::Template.register_tag("showhide", Jekyll::ShowHideBlock)