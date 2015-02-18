n = ARGV[0].to_f
p = ARGV[1].to_f
k = ARGV[2].to_f

slice_1 = Math.gamma(n+1)/Math.gamma(k+1)/Math.gamma(n-k+1)
slice_2 = p**k
slice_3 = (1-p)**(n-k)
output = slice_1*slice_2*slice_3
puts output
