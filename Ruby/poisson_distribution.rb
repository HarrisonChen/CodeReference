lambda_param = ARGV[0].to_f
x = ARGV[1].to_f

p = (lambda_param**x)*((Math::E)**(-lambda_param))/(Math.gamma(x+1))
puts p
