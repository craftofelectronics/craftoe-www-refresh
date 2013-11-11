module Jekyll
  class MarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
      # puts(@text)
    end

    def look_up(context, name)
      lookup = context

      name.split(".").each do |value|
        lookup = lookup[value]
      end

      lookup
    end
    
    require "kramdown"
    def render(context)
      theSource = look_up(context, @text)
      # puts("The source: " + theSource)
      filename = File.join(Dir.pwd, theSource)
      fullFile = ""
      barCount = 0
      File.readlines(filename).each do |line|
        
        if line.match /---/
          barCount += 1
        end
        
        if barCount > 1
          if line.match /^---/
            # puts("Dropping line: " + line)
          else
            fullFile = fullFile + line
          end
        end
      end
      
      rendered = Kramdown::Document.new(fullFile).to_html
      "#{rendered}"
    end
  end
end
Liquid::Template.register_tag('kram', Jekyll::MarkdownTag)